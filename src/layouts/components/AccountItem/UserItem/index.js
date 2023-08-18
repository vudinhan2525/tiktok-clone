import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import PreviewUser from '../../TippyPreviewUser';
import Image from '~/layouts/components/Image';
import styles from './UserItem.module.scss';
const cx = classNames.bind(styles);

function UserItem({ data, notPreview }) {
  const renderPreview = () => {
    return <PreviewUser data={data}></PreviewUser>;
  };
  const renderItem = () => {
    return (
      <Link to={`/@${data.nickname}`} className={cx('item')}>
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
          appendTo={document.getElementById('root')}
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
