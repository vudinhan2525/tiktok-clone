import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import { Wrapper } from '~/component/Popper';
import Image from '~/layouts/components/Image';
import Button from '~/layouts/components/Button';
import styles from './UserItem.module.scss';
const cx = classNames.bind(styles);

function UserItem({ data, notPreview }) {
  const renderPreview = () => {
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
  };
  const renderItem = () => {
    return (
      <Link className={cx('item')}>
        <Image alt="" src={data.avatar} className={cx('avatar')} />
        <div className={cx('info')}>
          <h4 className={cx('name')}>{data.first_name + ' ' + data.last_name}</h4>
          {data.tick && (
            <div className={cx('check-icon')}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
          )}
          <p className={cx('nickname')}>{data.nickname}</p>
        </div>
      </Link>
    );
  };
  return (
    <div>
      {notPreview === false ? (
        <Tippy
          offset={[5, 10]}
          interactive
          placement="bottom-end"
          delay={[800, 0]}
          render={(attrs) => (
            <div className={cx('content')} tabIndex="-1" {...attrs}>
              {renderPreview()}
            </div>
          )}
        >
          {renderItem()}
        </Tippy>
      ) : (
        renderItem()
      )}
    </div>
  );
}

export default UserItem;
