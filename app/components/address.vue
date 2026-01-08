<template>
  <div class="space-y-6">
    <!-- <div v-if="loading" class="text-gray-500">Loading addresses…</div> -->

    <div>
      <div
        v-for="(addr, i) in addresses"
        :key="addr.uid"
        class="border rounded-2xl shadow-sm p-5 bg-white"
      >
        <div class="flex justify-between items-center mb-3">
          <h3 class="font-semibold text-lg">Address {{ i + 1 }}</h3>

          <button
            v-if="addresses.length > 1"
            class="text-red-600 text-sm"
            @click="removeAddress(i)"
          >
            Remove
          </button>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="text-sm">Name</label>
            <input v-model="addr.name" class="input" />
          </div>

          <div>
            <label class="text-sm">Phone</label>
            <input v-model="addr.phone" class="input" />
          </div>

          <div>
            <label class="text-sm">Email</label>
            <input v-model="addr.email" class="input" />
          </div>

          <div>
            <label class="text-sm">Address Line 1</label>
            <input v-model="addr.address_line1" class="input" />
          </div>

          <div>
            <label class="text-sm">Address Line 2</label>
            <input v-model="addr.address_line2" class="input" />
          </div>

          <div>
            <label class="text-sm">Country</label>
            <select v-model="addr.country_id" class="input" @change="loadStates(i)">
              <option value="">Select Country</option>
              <option v-for="c in countries" :key="c.id" :value="c.id">
                {{ c.name }}
              </option>
            </select>
          </div>

          <div>
            <label class="text-sm">State</label>
            <select v-model="addr.state_id" class="input" @change="loadCities(i)">
              <option value="">Select State</option>
              <option v-for="s in addr._states" :key="s.id" :value="s.id">
                {{ s.name }}
              </option>
            </select>
          </div>

          <div>
            <label class="text-sm">City</label>
            <select v-model="addr.city_id" class="input">
              <option value="">Select City</option>
              <option v-for="c in addr._cities" :key="c.id" :value="c.id">
                {{ c.name }} ({{ c.pincode }})
              </option>
            </select>
          </div>

          <div>
            <label class="text-sm">Postal Code</label>
            <input v-model="addr.postal_code" class="input" />
          </div>

          <div class="flex items-center gap-2 mt-3">
            <input
              type="radio"
              name="defaultAddress"
              :checked="addr.is_default"
              @change="setDefault(i)"
            />
            <span class="text-sm">Make this default</span>
          </div>
        </div>
      </div>

      <!-- ACTIONS -->
      <div class="flex gap-4">
        <button
          class="bg-indigo-600 text-white px-4 py-2 rounded-xl disabled:opacity-40"
          :disabled="addresses.length >= 3"
          @click="addAddress"
        >
          + Add Address
        </button>

        <button
          class="bg-green-600 text-white px-5 py-2 rounded-xl"
          @click="save"
        >
          Save Addresses
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import apiService from "../utils/api"
import { useLoaderStore } from '../stores/loader'

const loading = ref(true)
const countries = ref([])
const addresses = ref([])
 const loader = useLoaderStore()
  

/* -------- blank address -------- */
function blank() {
  return {
    uid: crypto.randomUUID(),
    id: null,
    name: "",
    phone: "",
    email: "",
    address_line1: "",
    address_line2: "",
    city_id: "",
    state_id: "",
    country_id: "",
    postal_code: "",
    is_default: false,
    _states: [],
    _cities: []
  }
}

/* -------- lifecycle -------- */
onMounted(async () => {
  try {
    loader.start()
    const res = await apiService.get("/countries")
    countries.value = res
    await fetchSavedAddresses()
  } finally {
    loading.value = false
    loader.stop()
  }
})

/* -------- fetch saved addresses -------- */
async function fetchSavedAddresses() {
  loader.start()
  try {
    
    const res = await apiService.get("/addresses")
    const list = res.data || res

    addresses.value = list.map(a => ({
      uid: crypto.randomUUID(),
      id: a.id,
      name: a.name,
      phone: a.phone,
      email: a.email,
      address_line1: a.address_line1,
      address_line2: a.address_line2,
      city_id: a.city_id,
      state_id: a.state_id,
      country_id: a.country_id,
      postal_code: a.postal_code,
      is_default: a.is_default,
      _states: [],
      _cities: []
    }))

    if (!addresses.value.length) {
      addresses.value.push(blank())
    }
    loader.stop()
  } catch (e) {
    loader.stop()
    console.error(e)
    addresses.value = [blank()]
  }
}

/* -------- helpers -------- */
function addAddress() {
  if (addresses.value.length < 3) {
    addresses.value.push(blank())
  }
}

function removeAddress(index) {
  addresses.value.splice(index, 1)
}

function setDefault(index) {
  addresses.value.forEach((a, i) => (a.is_default = i === index))
}

/* -------- states & cities -------- */
async function loadStates(index) {
  const addr = addresses.value[index]
  addr.state_id = ""
  addr.city_id = ""
  addr._cities = []

  if (!addr.country_id) return
  addr._states = await apiService.get(`/states?country_id=${addr.country_id}`)
}

async function loadCities(index) {
  const addr = addresses.value[index]
  addr.city_id = ""

  if (!addr.state_id) return
  addr._cities = await apiService.get(`/cities?state_id=${addr.state_id}`)
}

/* -------- save -------- */
async function save() {
  loader.start()
  try {
    const payload = {
      addresses: addresses.value.map(a => ({
        id: a.id,
        name: a.name,
        phone: a.phone,
        email: a.email,
        address_line1: a.address_line1,
        address_line2: a.address_line2,
        city_id: a.city_id,
        state_id: a.state_id,
        country_id: a.country_id,
        postal_code: a.postal_code,
        is_default: a.is_default
      }))
    }

    await apiService.post("/addresses/bulk", payload)
    loader.stop()
    alert("Saved successfully ✔️")
  } catch (e) {
    loader.stop()
    console.error(e)
    alert("Save failed ❌")
  }
}
</script>



<style scoped>
.input {
  @apply border rounded-xl w-full px-3 py-2 mt-1 focus:outline-none focus:ring;
}
</style>
