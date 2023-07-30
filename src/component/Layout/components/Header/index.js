import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapped')}>
      <div className={cx('inner')}>
        {/* Logo */}
        {/* Search */}
        {/* Control */}
      </div>
    </header>
  );
}

export default Header;
