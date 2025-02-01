import { verify_token } from "#entities/users"
import { PageContext } from "vike/types"
import { redirect } from 'vike/abort'
import { getCookies } from "#shared/lib"

export const guard = async (pageContext: PageContext) => {
    const cookies = getCookies(pageContext)
    const verified = await verify_token(cookies)

    if (!verified) throw redirect('/login')
}