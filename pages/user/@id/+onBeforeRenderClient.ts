import {
  setFollowers,
  setFollowersPagination,
  setMyInfo,
  setPosts,
  setPostsPagination,
  setUser,
  set_has_followers_more,
  set_has_posts_more,
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

  set_has_posts_more(postsData.length < postsPagination.total)
  set_has_followers_more(followersData.length < followersPagination.total)
}
