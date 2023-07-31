import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ProfileList.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function ProfileList() {
  return (
    <li className={cx('wrapped')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0b1d58fee5011827b610b33d694e6c51~c5_300x300.webp?x-expires=1690966800&x-signature=CncyXkG2c1QSSVzRlkhCFY0yuBA%3D"
        alt="Hooa"
      />
      <div className={cx('info')}>
        <p className={cx('id')}>
          <span>hoa_2309</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
        </p>
        <p className={cx('name')}>Ngô Ngọc Hòa</p>
      </div>
    </li>
  );
}

export default ProfileList;
