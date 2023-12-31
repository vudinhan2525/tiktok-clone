import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
const cx = classNames.bind(styles);

function Menu({ items = [], hideOnClick = false, children }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  function handleClick(e, index, item, isParent) {
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    }
  }
  let renderItems = () => {
    return current.data.map((item, index) => {
      let isParent = !!item.children;
      return <MenuItem onClick={(e) => handleClick(e, index, item, isParent)} key={index} data={item} />;
    });
  };
  return (
    <Tippy
      offset={[12, 10]}
      interactive
      delay={[0, 700]}
      //hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper clx={cx('menu')}>
            {history.length > 1 && (
              <HeaderMenu
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
                title={current.title}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node.isRequired,
  hideOnClick: PropTypes.func,
};
export default Menu;
