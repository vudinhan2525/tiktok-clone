import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
  faShare,
  faPlay,
  faPause,
  faVolumeXmark,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import styles from './PostVideo.module.scss';
import { saveToStorage, getFromStorage } from '~/utils/localStorage';
const cx = classNames.bind(styles);

function PostVideo({ post }) {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(() => {
    const item = getFromStorage('user-volume');
    if (item === false) {
      return 0;
    } else {
      return item.vol;
    }
  });
  const videoRef = useRef();
  const volumeInputRef = useRef();
  const handlePauseVideo = () => {
    if (!videoRef.current.paused) {
      videoRef.current.pause();
      setPlaying(false);
    }
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
            if (videoRef.current.paused) {
              videoRef.current.play();
              //videoRef.current.muted = false;
              setPlaying(true);
            }
          } else {
            if (!videoRef.current.paused) {
              videoRef.current.pause();
              setPlaying(false);
            }
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
  useEffect(() => {
    volumeInputRef.current.style.background = `linear-gradient(90deg, var(--white-color) ${Math.floor(
      volume * 100,
    )}%, rgba(255, 255, 255, 0.34) 0)`;
  }, [volume]);
  const handleChangeVolume = (e) => {
    videoRef.current.muted = false;

    videoRef.current.volume = e.target.value;
    saveToStorage('user-volume', {
      vol: e.target.value,
    });
    setVolume(e.target.value);
  };
  const handleNotMuted = () => {
    const item = getFromStorage('user-volume');
    videoRef.current.muted = false;
    if (item.vol === '0') {
      item.vol = 1;
      videoRef.current.volume = 1;
      saveToStorage('user-volume', { vol: 1 });
    }
    setVolume(item.vol);
  };
  const handleMuted = () => {
    videoRef.current.muted = true;
    setVolume(0);
  };
  return (
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
          {volume <= 0 ? (
            <FontAwesomeIcon className={cx('muting')} icon={faVolumeXmark} onClick={handleNotMuted}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon className={cx('playing')} icon={faVolumeHigh} onClick={handleMuted}></FontAwesomeIcon>
          )}
          <div className={cx('volume-wrapper')}>
            <input
              type="range"
              className={cx('volume')}
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleChangeVolume}
              ref={volumeInputRef}
            ></input>
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
  );
}

export default PostVideo;
