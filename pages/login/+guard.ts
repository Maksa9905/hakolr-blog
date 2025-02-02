import { verify_token } from '#entities/users/index.js'
import { getCookies } from '#shared/lib/getCookies.js'
import { redirect } from 'vike/abort'
import { PageContext } from 'vike/types'

export const guard = async (pageContext: PageContext) => {
  const cookies = getCookies(pageContext?.headers?.cookie)
  const verified = await verify_token(cookies)

  if (verified) throw redirect('/?logged=true')
}
