import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MusicIcons } from '~/layouts/components/UploadIcons';
import Image from '~/layouts/components/Image';
import Button from '~/layouts/components/Button';
import styles from './PostItem.module.scss';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function PostItem() {
  return (
    <div className={cx('post-item')}>
      <Link>
        <Image
          className={cx('avatar')}
          alt=""
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/8e24422f9b89012332a5a16dd95f6c72~c5_100x100.jpeg?x-expires=1691460000&x-signature=K9Q353EARUxmbgb%2BP%2B4gVqlKaaA%3D"
        />
      </Link>
      <div className={cx('content-box')}>
        <div className={cx('content-header')}>
          <div className={cx('info')}>
            <h3 className={cx('nickname')}>
              <Link to="/">ndson_02</Link>
            </h3>
            <p className={cx('fullname')}>captain</p>
          </div>
          <div className={cx('bio')}>Khi bạn thấy video này là lúc mấy giờ?…</div>
          <div className={cx('music')}>
            <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
            nhạc nền 1993 - Nhậm Thiên Tuyết
          </div>
          <Button cls={cx('btn')} outline>
            Follow
          </Button>
        </div>
        <div className={cx('video-box')}>
          <video
            className={cx('video')}
            autoPlay
            src={require('~/assets/videos/Download.mp4')}
            controls
            loop
            muted
            width={312}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
