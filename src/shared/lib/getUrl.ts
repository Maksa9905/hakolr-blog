export const url = (url: string) => {
  const baseUrl = import.meta.env.BASE_API_URL

  return `${baseUrl}/${url}`
}
