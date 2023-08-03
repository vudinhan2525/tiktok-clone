import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faGear, faCoins, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faCircleQuestion, faKeyboard, faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
const MenuItems = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Chế độ tối',
    switch: true,
  },
];
const MenuUser = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Xem hồ sơ',
    to: '/user',
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    title: 'Yêu thích',
    to: '/user',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Nhận Xu',
    href: 'https://www.tiktok.com/coin?enter_from=web_main_nav',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Cài đặt',
    to: '/setting',
  },
  ...MenuItems,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Đăng xuất',
    separate: true,
  },
];
export { MenuItems, MenuUser };
