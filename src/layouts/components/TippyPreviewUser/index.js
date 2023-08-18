import { Wrapper } from '~/component/Popper';
import classNames from 'classnames/bind';

import Image from '~/layouts/components/Image';
import Button from '~/layouts/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PreviewUser.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function PreviewUser({ data }) {
  return (
    <Wrapper cls={cx('container')}>
      <div className={cx('preview-header')}>
        <Image alt="" src={data.avatar} className={cx('preview-avatar')} />
        <Button primary>Follow</Button>
      </div>
      <div className={cx('preview-info')}>
        <h4 className={cx('preview-name')}>{data.first_name + ' ' + data.last_name}</h4>
        {data.tick && (
          <div className={cx('preview-icon')}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        )}
      </div>
      <h5 className={cx('preview-nickname')}>{data.nickname}</h5>
      <p className={cx('preview-rate')}>
        <span className={cx('preview-follower')}>{data.followers_count}</span> Followers
        <span className={cx('preview-like')}>{data.likes_count}</span> Likes
      </p>
    </Wrapper>
  );
}

export default PreviewUser;
