import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useMounted } from '~/hooks';
import Image from '~/layouts/components/Image';
import Button from '~/layouts/components/Button';
import { userService } from '~/Services';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);
function Profile() {
  const param = useParams();
  const [user, setUser] = useState({});
  const mount = useMounted();
  if (mount) {
    (async () => {
      setUser(await userService(param.nickname));
    })();
  }
  useEffect(() => {
    (async () => {
      setUser(await userService(param.nickname));
    })();
  }, [param]);
  if (Object.keys(user).length === 0) return <></>;
  return (
    <div className={cx('wrapped')}>
      <div className={cx('header')}>
        <div className={cx('introduce')}>
          <Image className={cx('avatar')} src={user.avatar} alt={user.nickname} />
          <div className={cx('user-heading')}>
            <h2 className={cx('nickname')}>{user.nickname}</h2>
            <h3 className={cx('name')}>{user.first_name + ' ' + user.last_name}</h3>
            <Button cls={cx('btn')} primary>
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
