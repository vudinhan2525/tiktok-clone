import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Image from '~/component/Layout/components/Image';
import styles from './ProfileList.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function ProfileList({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapped')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <p className={cx('id')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
        </p>
        <p className={cx('name')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default ProfileList;
