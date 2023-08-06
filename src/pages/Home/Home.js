import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import PostItem from './Post';
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx('wrapped')}>
      <PostItem />
      <PostItem />
    </div>
  );
}

export default Home;
