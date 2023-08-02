import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import TippyNormal from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Search from '~/component/Layout/components/Search';
import Button from '~/component/Layout/components/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Layout/components/Image';
import { MenuItems, MenuUser } from './fakeApi';
import { MessageIcons, UpLoadIcons } from '~/component/Layout/components/UploadIcons';
const cx = classNames.bind(styles);
let currentUser = true;
function Header() {
  return (
    <header className={cx('wrapped')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        {/* Search */}
        <Search></Search>
        <div className={cx('action-box')}>
          <Button cls={cx('add-btn')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <TippyNormal offset={[0, 8]} delay={[0, 200]} content="Tin nhắn">
                <button className={cx('msg-btn')}>
                  <UpLoadIcons />
                  {/* /* <FontAwesomeIcon icon={faPaperPlane} /> */}
                </button>
              </TippyNormal>
              <TippyNormal offset={[0, 5.5]} delay={[0, 200]} content="Hộp thư">
                <button className={cx('msg-btn')}>
                  <MessageIcons />
                </button>
              </TippyNormal>
            </>
          ) : (
            <>
              <Button primary>Đăng nhập</Button>
            </>
          )}
          <Menu items={currentUser ? MenuUser : MenuItems}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="An Vu"
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0b1d58fee5011827b610b33d694e6c51~c5_300x300.webp?x-expires=1690966800&x-signature=CncyXkG2c1QSSVzRlkhCFY0yuBA%3D"
              />
            ) : (
              <span>
                <Button cls={cx('options')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Button>
              </span>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
