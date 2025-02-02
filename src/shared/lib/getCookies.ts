export const getCookies = (cookiesString?: string) => {
  const cookies: Record<string, string> =
    cookiesString?.split(';').reduce((acc, item) => {
      const [key, value] = item.split('=')
      return { ...acc, [key]: value }
    }, {}) || {}

  return cookies
}
