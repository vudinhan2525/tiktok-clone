import routes from '~/config/routes';

import {
  HomeIcons,
  HomeSolidIcons,
  LiveIcons,
  ExploreIcons,
  FollowIcons,
  FollowSolidIcons,
  ExploreSolidIcons,
  LiveSolidIcons,
} from '~/layouts/components/UploadIcons';
const menuItems = [
  {
    icon: <HomeIcons />,
    activeIcon: <HomeSolidIcons />,
    title: 'Dành cho bạn',
    to: routes.home,
  },
  {
    icon: <FollowIcons />,
    activeIcon: <FollowSolidIcons />,
    title: 'Đang Follow',
    to: routes.following,
  },
  {
    icon: <ExploreIcons />,
    activeIcon: <ExploreSolidIcons />,
    title: 'Khám phá',
    to: routes.explore,
  },
  {
    icon: <LiveIcons />,
    activeIcon: <LiveSolidIcons />,
    title: 'LIVE',
    to: routes.live,
  },
];
const followingAccounts = [
  {
    avatar:
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d098ab6b1a995f61f60120b3fd2f5be9.jpeg?x-expires=1691294400&x-signature=x6dMv442OIITNz1UMvbtMj0cnOc%3D',
    name: 'eunlaxy',
    nickname: '은하EUNHA',
    check: true,
    followers: 3.4,
    likes: 23.5,
  },
];
export { menuItems, followingAccounts };
