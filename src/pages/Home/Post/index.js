import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/layouts/components/Image';
import Button from '~/layouts/components/Button';
import styles from './PostItem.module.scss';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import PostVideo from '../PostVideo';
const cx = classNames.bind(styles);
function PostItem({ post }) {
  return (
    <div className={cx('post-item')}>
      <Link className={cx('avatar-box')}>
        <Image className={cx('avatar')} alt={post.user.first_name + post.user.last_name} src={post.user.avatar} />
      </Link>
      <div className={cx('content-box')}>
        <div className={cx('content-header')}>
          <div className={cx('info')}>
            <h3 className={cx('nickname')}>
              <Link to="/">{post.user.nickname}</Link>
            </h3>
            <p className={cx('fullname')}>{post.user.first_name + ' ' + post.user.last_name}</p>
          </div>
          <div className={cx('bio')}>{post.description}</div>
          <div className={cx('music')}>
            <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
            {post.music}
          </div>
          <Button cls={cx('btn')} outline>
            Follow
          </Button>
          <PostVideo post={post}></PostVideo>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
