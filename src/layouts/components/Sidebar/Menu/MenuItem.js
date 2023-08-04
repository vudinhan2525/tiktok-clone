import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ to, icon, title, activeIcon }) {
  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
      {({ isActive }) => {
        return (
          <>
            <div className={cx('item-icon')}>{isActive ? activeIcon : icon}</div>
            <p className={cx('item-title')}>{title}</p>
          </>
        );
      }}
    </NavLink>
  );
}
MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  activeIcon: PropTypes.node,
};
export default MenuItem;
