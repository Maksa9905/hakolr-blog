import { PageContext } from "vike/types";

export const getCookies = (pageContext: PageContext) => {
    const cookies: Record<string, string> = pageContext.headers?.cookie?.split(';').reduce((acc, item) => {
        const [key, value] = item.split('=')
        return { ...acc, [key]: value }
    }, {}) || {}

    return cookies
}