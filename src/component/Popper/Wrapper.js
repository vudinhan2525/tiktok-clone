import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
const cx = classNames.bind(styles);
function Wrapper({ children, clx = '' }) {
  return <div className={cx('wrapper', clx)}>{children}</div>;
}

export default Wrapper;
