import classNames from 'classnames/bind';
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
          <input type="text" placeholder="Tìm kiếm" spellCheck={false}></input>
          <button></button>
          <button className={cx('search-btn')}></button>
        </div>
        <div className={cx('action-box')}></div>
      </div>
    </header>
  );
}

export default Header;
