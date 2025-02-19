import {
  DesktopUserPostList,
  DesktopUserPostListProps,
} from './UserPostList.desktop'
import {
  MobileUserPostList,
  MobileUserPostListProps,
} from './UserPostList.mobile'

export type UserPostListProps =
  | (DesktopUserPostListProps & { isMobile?: false })
  | (MobileUserPostListProps & { isMobile?: true })

export const UserPostList = ({
  isMobile = false,
  ...props
}: UserPostListProps) => {
  if (!isMobile) return <DesktopUserPostList {...props} />
  return <MobileUserPostList {...props} />
}
