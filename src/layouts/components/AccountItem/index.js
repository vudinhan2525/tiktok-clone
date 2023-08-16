import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { suggestService } from '~/Services';
import styles from './AccountItem.module.scss';
import UserItem from './UserItem';
const cx = classNames.bind(styles);

function AccountItem({ title, data = [], notPreview = false }) {
  const [users, setUsers] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    (async () => {
      setUsers(await suggestService(currentPage, 5));
      setCurrentPage((prev) => prev + 1);
    })();
  }, []);
  const handleSeeMore = () => {
    (async () => {
      const newUsers = await suggestService(currentPage, 5);
      setUsers([...users, ...newUsers]);
      setCurrentPage((prev) => prev + 1);
    })();
  };
  const handleLessMore = () => {
    (async () => {
      setUsers(await suggestService(1, 5));
      setCurrentPage(2);
    })();
  };
  return (
    <>
      <h4 className={cx('title')}>{title}</h4>
      {users.map((item, index) => {
        return <UserItem key={index} data={item} notPreview={notPreview} />;
      })}
      {users.length <= 20 ? (
        <p className={cx('see-more')} onClick={handleSeeMore}>
          Xem thêm
        </p>
      ) : (
        <p className={cx('see-more')} onClick={handleLessMore}>
          Ẩn bớt
        </p>
      )}
    </>
  );
}

export default AccountItem;
