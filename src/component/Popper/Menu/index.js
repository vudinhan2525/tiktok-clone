import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
const cx = classNames.bind(styles);

function Menu({ items = [], children }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1].data;
  function handleClick(e, index, item, isParent) {
    if (isParent) {
      console.log(item.children.data);
      setHistory((prev) => [...prev, item.children]);
    }
  }
  let renderItems = () => {
    return current.map((item, index) => {
      let isParent = !!item.children;
      return <MenuItem onClick={(e) => handleClick(e, index, item, isParent)} key={index} data={item} />;
    });
  };
  return (
    <Tippy
      visible
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper clx={cx('menu')}>
            {history.length > 1 && (
              <HeaderMenu
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
                title="Ngôn ngữ"
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
