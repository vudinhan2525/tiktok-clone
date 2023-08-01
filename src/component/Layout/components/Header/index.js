import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faCircleNotch,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon, faCircleQuestion, faKeyboard, faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import TippyNormal from '@tippyjs/react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Button from '~/component/Layout/components/Button';
import ProfileList from '~/component/Layout/components/ProfileList/ProfileList.js';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Layout/components/Image';
import { MenuItems, MenuUser } from './fakeApi';
import { MessageIcons, UpLoadIcons } from '~/component/Layout/components/UploadIcons';
const cx = classNames.bind(styles);
let currentUser = true;
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult(['2']);
    }, 0);
  }, []);
  return (
    <header className={cx('wrapped')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title-account')}>Tài khoản</h4>
                <ProfileList></ProfileList>
                <ProfileList></ProfileList>
                <ProfileList></ProfileList>
                <ProfileList></ProfileList>
                <h4 className={cx('suggest-list')}>Xem tất cả kết quả tìm kiếm cho ""</h4>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search-box')}>
            <input className={cx('search-input')} type="text" placeholder="Tìm kiếm" spellCheck={false}></input>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button className={cx('loading')}>
              <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
            </button>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action-box')}>
          <Button cls={cx('add-btn')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <TippyNormal delay={[0, 200]} content="Tin nhắn">
                <button className={cx('msg-btn')}>
                  <UpLoadIcons />
                  {/* /* <FontAwesomeIcon icon={faPaperPlane} /> */}
                </button>
              </TippyNormal>
              <TippyNormal delay={[0, 200]} content="Hộp thư">
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
