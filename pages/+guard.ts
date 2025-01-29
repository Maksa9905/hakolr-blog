import { verify_token } from "#entities/users"
import { PageContext } from "vike/types"
import { redirect } from 'vike/abort'

export const guard = async (pageContext: PageContext) => {
    // const verified = await verify_token()

    // console.log(verified)

    // if (!verified) throw redirect('/login')

    if (!pageContext.headers?.cookie.split(';').find((item) => item.includes('Authorization'))) throw redirect('/login')
}