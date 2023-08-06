import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss';
import PostItem from './Post';
import { loadPostService } from '~/Services';
const cx = classNames.bind(styles);
let isLoad = true;
function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async () => {
      const newPosts = await loadPostService('for-you', page);
      setPosts((prev) => [...prev, ...newPosts]);
    })();
  }, [page]);
  function handleLoadPost() {
    console.log(posts);
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setPage((page) => page + 1);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleLoadPost);
    return () => window.removeEventListener('scroll', handleLoadPost);
  }, []);
  if (posts.length === 0) return <></>;
  return (
    <div className={cx('wrapped')}>
      {posts.map((post, index) => {
        return <PostItem key={index} post={post} />;
      })}
    </div>
  );
}

export default Home;
