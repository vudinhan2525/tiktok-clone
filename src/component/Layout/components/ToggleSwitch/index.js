import classNames from 'classnames/bind';

import styles from './ToggleSwitch.module.scss';
const cx = classNames.bind(styles);
function ToggleSwitch() {
  return (
    <span>
      <label className={cx('switch')}>
        <input type="checkbox" />
        <span className={cx('slider', 'round')}></span>
      </label>
    </span>
  );
}

export default ToggleSwitch;
