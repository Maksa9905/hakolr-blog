import { verify_token } from "#entities/users"
import { PageContext } from "vike/types"
import { redirect } from 'vike/abort'

export const guard = async (pageContext: PageContext) => {}