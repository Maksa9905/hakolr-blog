import {
  DesktopFollowersList,
  DesktopFollowersListProps,
} from './FollowersList.desktop'
import {
  MobileFollowersList,
  MobileFollowersListProps,
} from './FollowersList.mobile'

export type FollowersListProps =
  | (DesktopFollowersListProps & { isMobile?: false })
  | (MobileFollowersListProps & { isMobile?: true })

export const FollowersList = ({ isMobile, ...props }: FollowersListProps) => {
  if (isMobile) return <MobileFollowersList {...props} />
  return <DesktopFollowersList {...props} />
}
