import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useMounted } from '~/hooks';
import { LinkIcons } from '~/layouts/components/UploadIcons';
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
  const handleURL = (string) => {
    string = string.toLowerCase();
    if (string.startsWith('https://')) {
      return string.substring(8);
    }
    return string;
  };
  const renderURL = (key) => {
    if (key.endsWith('_url')) {
      return (
        user[key] && (
          <div className={cx('link-box')}>
            <div className={cx('link-icon')}>
              <LinkIcons />
            </div>
            <a href={user[key]} className={cx('link')}>
              {handleURL(user[key])}
            </a>
          </div>
        )
      );
    }
  };
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

        <div className={cx('rate-box')}>
          <div className={cx('rate')}>
            {user.followings_count + ' '}
            <span className={cx('rate-description')}>Đang Follow</span>
          </div>
          <div className={cx('rate')}>
            {user.followers_count + ' '}
            <span className={cx('rate-description')}>Follower</span>
          </div>
          <div className={cx('rate')}>
            {user.likes_count + ' '}
            <span className={cx('rate-description')}>Thích</span>
          </div>
        </div>
        <div className={cx('bio')}>{user.bio}</div>
        {Object.keys(user).map((key) => renderURL(key))}
      </div>
    </div>
  );
}

export default Profile;
