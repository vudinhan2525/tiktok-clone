import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';
import { useState } from 'react';
import { loginMethods } from './loginmethod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';
import Button from '~/layouts/components/Button';
const cx = classNames.bind(styles);

function LoginLayout({ onClick, isOpen }) {
  const [page, setPage] = useState([0]);
  if (!isOpen) return null;
  let curpage = page[page.length - 1];
  const renderContent = () => {
    return (
      <div className={cx('content')}>
        <div className={cx('content-inside')}>
          <h1 className={cx('header')}>{curpage === 0 ? 'Đăng nhập vào TikTok' : 'Đăng ký TikTok'}</h1>
          {loginMethods.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  if (index === 1 && curpage === 0) setPage((prev) => [...prev, 1]);
                  else if (index === 1 && curpage === 2) setPage((prev) => [...prev, 3]);
                }}
                className={cx('item', { disable: item.disable })}
              >
                <div className={cx('icon')}>{item.icon}</div>
                <div className={cx('text')}>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const renderPolicy = () => {
    return (
      <footer className={cx('policy-text')}>
        Bằng cách tiếp tục, bạn đồng ý với{' '}
        <a className={cx('linked')} href="/">
          Điều khoản Sử dụng
        </a>{' '}
        của TikTok và xác nhận rằng bạn đã đọc hiểu{' '}
        <a className={cx('linked')} href="/">
          Chính sách Quyền riêng tư
        </a>{' '}
        của TikTok.
      </footer>
    );
  };
  const renderLogin = () => {
    return (
      <div className={cx('content')}>
        <div className={cx('content-inside')}>
          <h1 className={cx('header')}>Đăng nhập</h1>
          <p className={cx('login-text')}>Email hoặc TikTok ID</p>
          <input type="text" className={cx('login-input')} placeholder="Email hoặc TikTok ID"></input>
          <input type="password" className={cx('login-input')} placeholder="Mật khẩu"></input>
          <Button primary cls={cx('login-btn')}>
            Đăng nhập
          </Button>
        </div>
      </div>
    );
  };
  const renderSignUp = () => {
    return (
      <div className={cx('content')}>
        <div className={cx('content-inside')}>
          <h1 className={cx('header')}>Đăng ký</h1>
          <p className={cx('login-text')}>Email</p>
          <input type="text" className={cx('login-input')} placeholder="Địa chỉ Email"></input>
          <input type="password" className={cx('login-input')} placeholder="Mật khẩu"></input>
          <input type="password" className={cx('login-input')} placeholder="Xác nhận mật khẩu"></input>
          <Button primary cls={cx('login-btn')}>
            Đăng ký
          </Button>
        </div>
      </div>
    );
  };
  const handleChangePage = () => {
    if (curpage === 0) {
      setPage((prev) => [...prev, 2]);
    }
    if (curpage === 2 || curpage === 3) {
      setPage([0]);
    }
  };
  return (
    <div className={cx('wrapped')}>
      <div className={cx('container')}>
        {curpage === 0 ? renderContent() : <></>}
        {curpage === 1 ? renderLogin() : <></>}
        {curpage === 2 ? renderContent() : <></>}
        {curpage === 3 ? renderSignUp() : <></>}
        {curpage === 0 || curpage === 2 ? renderPolicy() : <></>}
        <footer className={cx('footer')}>
          Bạn không có tài khoản?{' '}
          <div className={cx('footer-sing')} onClick={handleChangePage}>
            {curpage === 0 || curpage === 1 ? 'Đăng ký' : 'Đăng nhập'}
          </div>
        </footer>
        <div onClick={onClick} className={cx('close-btn')}>
          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
        </div>
        {curpage !== 0 ? (
          <div onClick={() => setPage(page.slice(0, page.length - 1))} className={cx('back-btn')}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default LoginLayout;
