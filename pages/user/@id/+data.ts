import { ShortPostResponse } from '#entities/posts/index.js'
import { DetailedUserResponse, User } from '#entities/users/index.js'
import { WithPagination } from '#shared/model/types.js'
import {
  getFollowersFx,
  getMobileFollowersFx,
  getMyInfoFx,
  getPostsFx,
  getUserFx,
} from '#store/user/effects.js'
import {
  set_has_followers_more,
  set_has_posts_more,
} from '#store/user/events.js'
import { PageContext } from 'vike/types'

export interface UserPageData {
  userData: DetailedUserResponse
  postsData: WithPagination<ShortPostResponse[]>
  followersData: WithPagination<User[]>
  myInfo: null | DetailedUserResponse
}

export const data = async (pageContext: PageContext) => {
  const userId = pageContext.routeParams.id
  const cookies = pageContext?.headers?.cookie

  const userData = await getUserFx({ userId, cookies })

  const postsData = await getPostsFx({ userId, cookies })
  const followersData = await getFollowersFx({ userId, cookies })

  set_has_posts_more(postsData.data.length < postsData.total)
  set_has_followers_more(followersData.data.length < followersData.total)

  const myInfo = await getMyInfoFx(cookies)

  return {
    userData,
    postsData,
    followersData,
    myInfo,
  }
}
