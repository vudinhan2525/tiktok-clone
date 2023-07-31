import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faCircleNotch,
  faPlus,
  faEllipsis,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Button from '~/component/Layout/components/Button';
import ProfileList from '~/component/Layout/components/ProfileList/ProfileList.js';
const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState(['s']);
  return (
    <header className={cx('wrapped')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
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
          <Button primary>Đăng nhập</Button>
          <Button cls={cx('options')}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
