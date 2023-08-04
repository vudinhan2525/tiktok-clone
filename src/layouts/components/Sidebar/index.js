import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MenuItem from './Menu/MenuItem';
import { menuItems } from './fakeapi';
import AccountItem from '~/layouts/components/AccountItem';
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapped')}>
      <div className={cx('menu')}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} to={item.to} icon={item.icon} title={item.title} activeIcon={item.activeIcon} />
        ))}
      </div>
      <div className={cx('menu-following')}>
        <AccountItem title="Tài khoản gợi ý" />
        {/* <AccountItem title="Các tài khoản đang follow" data={followingAccounts} notPreview={true} /> */}
      </div>
      <div className={cx('menu-footer')}>
        <div className={cx('footer-box')}>
          <a href="https://www.tiktok.com/about?lang=vi-VN" className={cx('footer-item')}>
            Giới thiệu
          </a>
          <a href="https://newsroom.tiktok.com/vi-vn/" className={cx('footer-item')}>
            Bảng tin
          </a>
          <a href="https://www.tiktok.com/about/contact?lang=vi-VN" className={cx('footer-item')}>
            Liên hệ
          </a>
        </div>
        <a href="https://www.tiktok.com/about?lang=vi-VN" className={cx('footer-item')}>
          Quyền riêng tư
        </a>
        <a href="https://www.tiktok.com/about?lang=vi-VN" className={cx('footer-item')}>
          Cổng thông tin tác giả
        </a>
        <a href="https://www.tiktok.com/about?lang=vi-VN" className={cx('footer-item')}>
          Hướng dẫn Cộng đồng
        </a>
        <p className={cx('footer-item')}>© 2023 TikTok</p>
      </div>
    </aside>
  );
}

export default Sidebar;
