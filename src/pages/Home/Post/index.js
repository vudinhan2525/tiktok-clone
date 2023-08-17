import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';

import Image from '~/layouts/components/Image';
import Button from '~/layouts/components/Button';
import styles from './PostItem.module.scss';
import {
  faBookmark,
  faComment,
  faHeart,
  faMusic,
  faShare,
  faPlay,
  faPause,
  faVolumeXmark,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function PostItem({ post }) {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef();
  const handlePauseVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  };
  const handlePlayVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === true) {
            videoRef.current.play();
            setPlaying(true);
          } else {
            videoRef.current.pause();
            setPlaying(false);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
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
        </div>
        <div className={cx('video-box')}>
          <div className={cx('video-content')}>
            <video
              className={cx('video')}
              autoPlay={playing}
              src={post.file_url}
              loop
              muted
              width={312}
              height={556}
              ref={videoRef}
            ></video>
            <div className={cx('toggle-play-btn')}>
              {playing ? (
                <FontAwesomeIcon className={cx('pausing')} onClick={handlePauseVideo} icon={faPause}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon className={cx('playing')} onClick={handlePlayVideo} icon={faPlay}></FontAwesomeIcon>
              )}
            </div>
            <div className={cx('toggle-volume-btn')}>
              {/* <FontAwesomeIcon className={cx('playing')} icon={faVolumeHigh}></FontAwesomeIcon> */}
              <FontAwesomeIcon className={cx('muting')} icon={faVolumeXmark}></FontAwesomeIcon>
              <div className={cx('volume-wrapper')}>
                <input type="range" className={cx('volume')}></input>
              </div>
            </div>
            <div className={cx('action-box')}>
              <div className={cx('action-item')}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <span className={cx('number')}>{post.likes_count}</span>
              <div className={cx('action-item')}>
                <FontAwesomeIcon icon={faComment} />
              </div>
              <span className={cx('number')}>{post.comments_count}</span>
              <div className={cx('action-item')}>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <span className={cx('number')}>{post.shares_count}</span>
              <div className={cx('action-item')}>
                <FontAwesomeIcon icon={faShare} />
              </div>
              <span className={cx('number')}>{post.shares_count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
