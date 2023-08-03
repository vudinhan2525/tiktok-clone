import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { searchService } from '~/Services';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import ProfileList from '~/layouts/components/ProfileList/ProfileList.js';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(input, 500);
  const inputRef = useRef();
  const resultRef = useRef(0);
  const searchBoxRef = useRef(0);
  useEffect(() => {
    if (debounce.trim() === '') {
      setSearchResult([]);
      return;
    }
    (async () => {
      setLoading(true);

      const data = await searchService(debounce, 'less');
      setSearchResult(data);
      setLoading(false);
    })();
  }, [debounce]);

  const handleDeleteInput = () => {
    setSearchResult([]);
    setInput('');
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  //Handle Width Of SearchBar
  function handleResize() {
    let gap = window.outerWidth - window.innerWidth;
    let newWidth = 500 - gap / 2;
    if (searchBoxRef.current && resultRef.current) {
      if (newWidth < 200) {
        searchBoxRef.current.style.display = 'none';
        resultRef.current.style.display = 'none';
      } else {
        searchBoxRef.current.style.display = 'flex';
        searchBoxRef.current.style.width = newWidth + 'px';
        resultRef.current.style.display = 'block';
        resultRef.current.style.width = newWidth + 'px';
      }
    }
  }
  window.addEventListener('resize', handleResize);
  return (
    // Using div wrapped <div> tag to solve Tippy
    <div>
      <Tippy
        visible={showResult && searchResult.length > 0}
        appendTo={() => document.body}
        interactive
        placement="bottom"
        render={(attrs) => (
          <div className={cx('search-result')} ref={resultRef} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title-account')}>Tài khoản</h4>
              {searchResult.map((result) => (
                <ProfileList key={result.id} data={result} onClick={handleDeleteInput}></ProfileList>
              ))}
              <h4 className={cx('suggest-list')}>Xem tất cả kết quả tìm kiếm cho "{input}"</h4>
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search-box')} ref={searchBoxRef}>
          <input
            value={input}
            className={cx('search-input')}
            onChange={(e) => (e.target.value.startsWith(' ') ? setInput('') : setInput(e.target.value))}
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
    </div>
  );
}

export default Search;
