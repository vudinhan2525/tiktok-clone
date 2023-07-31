import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/image';
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapped')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
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
        <div className={cx('action-box')}></div>
      </div>
    </header>
  );
}

export default Header;
