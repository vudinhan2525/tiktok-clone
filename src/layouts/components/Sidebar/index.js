import classNames from 'classnames/bind';
import routes from '~/config/routes';
import styles from './Sidebar.module.scss';
import MenuItem from './Menu/MenuItem';
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
const cx = classNames.bind(styles);
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
function Sidebar() {
  return (
    <aside className={cx('wrapped')}>
      <div className={cx('menu')}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} to={item.to} icon={item.icon} title={item.title} activeIcon={item.activeIcon} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
