import {
  setFollowers,
  setFollowersPagination,
  setMyInfo,
  setPosts,
  setPostsPagination,
  setUser,
} from '#store/user/events.js'
import { PageContext } from 'vike/types'
import { UserPageData } from './+data'
import { mapPost } from '#entities/posts/index.js'

export const onBeforeRenderClient = (
  pageContext: PageContext<UserPageData>,
) => {
  const {
    myInfo,
    userData,
    postsData: { data: postsData, ...postsPagination },
    followersData: { data: followersData, ...followersPagination },
  } = pageContext.data

  setUser(userData)
  setMyInfo(myInfo)

  setPosts(postsData.map(mapPost))
  setPostsPagination(postsPagination)

  setFollowers(followersData)
  setFollowersPagination(followersPagination)
}
