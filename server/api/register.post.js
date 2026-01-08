export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  try {
    const res = await $fetch(`${config.public.API_BASE_URL}/register`, {
      method: "POST",
      body,
    })

    // expected laravel response:
    // { token: "...", user: {...} }

    if (!res?.token || !res?.user) {
      throw new Error("Invalid response from API")
    }

    // save token in httpOnly cookie
    setCookie(event, "auth_token", res.token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return {
      success: true,
      user: res.user,
    }
  } catch (e) {
    return {
      success: false,
      message: e?.data?.message || e.message || "Registration failed",
    }
  }
})
