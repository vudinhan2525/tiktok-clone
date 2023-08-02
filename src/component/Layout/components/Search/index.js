import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import ProfileList from '~/component/Layout/components/ProfileList/ProfileList.js';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(input, 500);
  const inputRef = useRef();

  useEffect(() => {
    if (debounce.trim() === '') {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounce]);

  const handleDeleteInput = () => {
    setSearchResult([]);
    setInput('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <Tippy
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title-account')}>Tài khoản</h4>
            {searchResult.map((result) => (
              <ProfileList key={result.id} data={result}></ProfileList>
            ))}
            <h4 className={cx('suggest-list')}>Xem tất cả kết quả tìm kiếm cho "{input}"</h4>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search-box')}>
        <input
          value={input}
          className={cx('search-input')}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResult(true)}
          ref={inputRef}
          type="text"
          placeholder="Tìm kiếm"
          spellCheck={false}
        ></input>
        {input !== '' && !loading && (
          <button onClick={handleDeleteInput} className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <button className={cx('loading')}>
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
          </button>
        )}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
