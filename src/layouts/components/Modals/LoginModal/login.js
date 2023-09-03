import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';
import Button from '~/layouts/components/Button';
import axios from 'axios';
import { useState } from 'react';
const cx = classNames.bind(styles);

function RenderLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json', // Set the content type
          },
        },
      );
      if (response.data.status === 'success') {
        localStorage.setItem('jwt', response.data.token);
        window.location.href = '/';
      }
    } catch (error) {
      if (error.response.data.status === 'error') {
        setErrMsg(error.response.data.message);
      }
    }
  };
  return (
    <div className={cx('content')}>
      <form className={cx('content-inside')} onSubmit={handleLogin}>
        <h1 className={cx('header')}>Đăng nhập</h1>
        <p className={cx('login-text')}>Email hoặc TikTok ID</p>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrMsg('');
          }}
          className={cx('login-input', { wrongInput: errMsg !== '' })}
          placeholder="Email hoặc TikTok ID"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrMsg('');
          }}
          className={cx('login-input', { wrongInput: errMsg !== '' })}
          placeholder="Mật khẩu"
        ></input>
        {errMsg !== '' ? <p className={cx('warning-input')}>{errMsg}</p> : <></>}
        <Button primary cls={cx('login-btn')}>
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default RenderLogin;
