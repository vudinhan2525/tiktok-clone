import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './LoginLayout.module.scss';
import Button from '~/layouts/components/Button';
const cx = classNames.bind(styles);

function RenderSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const scrollToButton = useRef();
  useEffect(() => {
    if (scrollToButton.current) {
      // Scroll to the element
      scrollToButton.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) return;
    const formData = new URLSearchParams();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('passwordConfirm', passwordConfirm);
    fetch('http://127.0.0.1:8000/api/v1/signup', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/x-www-form-urlencoded' }),
      body: formData.toString(),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 'success') {
          localStorage.setItem('jwt', data.token);
          window.location.href = '/';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={cx('content')}>
      <form className={cx('content-inside')} onSubmit={handleSignUp}>
        <h1 className={cx('header')}>Đăng ký</h1>
        <p className={cx('login-text')}>Nhập vào thông tin của bạn</p>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cx('login-input')}
          placeholder="Tên của bạn"
        ></input>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cx('login-input')}
          placeholder="Địa chỉ Email"
        ></input>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={cx('login-input', { wrongInput: password !== passwordConfirm })}
          placeholder="Mật khẩu"
        ></input>
        <input
          type="password"
          required
          value={passwordConfirm}
          className={cx('login-input', { wrongInput: password !== passwordConfirm })}
          placeholder="Xác nhận mật khẩu"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        ></input>
        {password !== passwordConfirm ? <p className={cx('warning-input')}>Mật khẩu xác nhận chưa chính xác</p> : <></>}
        <Button primary cls={cx('login-btn')}>
          Đăng ký
        </Button>
        <p ref={scrollToButton}></p>
      </form>
    </div>
  );
}

export default RenderSignUp;
