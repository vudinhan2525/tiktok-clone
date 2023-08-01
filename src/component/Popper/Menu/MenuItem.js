import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, ...passProps }) {
  let Comp = 'li';
  const props = {
    onClick: data.onClick,
    ...passProps,
  };
  if (data.to) {
    props.to = data.to;
    Comp = Link;
  } else if (data.href) {
    Comp = 'a';
    props.href = data.href;
  }
  return (
    <Comp className={cx('item')} {...props}>
      <div className={cx('info')}>
        <span className={cx('icon')}>{data.icon}</span>
        <span className={cx('title')}>{data.title}</span>
      </div>
    </Comp>
  );
}

export default MenuItem;
