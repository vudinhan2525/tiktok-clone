import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menu({ items = [], children }) {
  let renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper clx={cx('menu')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
