import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import TippyNormal from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import routes from '~/config/routes';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Search from '~/layouts/components/Search';
import Button from '~/layouts/components/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/layouts/components/Image';
import LoginModal from '~/layouts/components/Modals/LoginModal';
import { MenuItems, MenuUser } from './fakeApi';
import { MessageIcons, UpLoadIcons } from '~/layouts/components/UploadIcons';
import { useState } from 'react';
const cx = classNames.bind(styles);
let currentUser = false;
function Header() {
  const [showLayout, setShowLayout] = useState(false);
  return (
    <header className={cx('wrapped')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={routes.home} style={{ display: 'flex', width: '150px' }}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>
        {/* Search */}
        <Search></Search>
        <div className={cx('action-box')}>
          <Button cls={cx('add-btn')} to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <TippyNormal offset={[0, 8]} delay={[0, 200]} content="Tin nhắn">
                <button
                  onClick={() => {
                    window.location.href = 'http://localhost:3000/message';
                  }}
                  className={cx('msg-btn')}
                >
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
              <Button
                primary
                onClick={() => {
                  setShowLayout(true);
                  document.querySelector('body').style.overflowY = 'hidden';
                }}
              >
                Đăng nhập
              </Button>
            </>
          )}
          <Menu items={currentUser ? MenuUser : MenuItems}>
            {currentUser ? (
              <Image className={cx('user-avatar')} alt="An Vu" src="" />
            ) : (
              <span>
                <Button cls={cx('options')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Button>
              </span>
            )}
          </Menu>
          <LoginModal
            isOpen={showLayout}
            onClick={() => {
              setShowLayout(false);
              document.querySelector('body').style.overflowY = 'overlay';
            }}
          ></LoginModal>
        </div>
      </div>
    </header>
  );
}

export default Header;
