import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ToggleSwitch from '~/layouts/components/ToggleSwitch';
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
    <Comp className={cx('item', data.separate ? 'separate' : '')} {...props}>
      <div className={cx('info')}>
        {data.icon && <span className={cx('icon')}>{data.icon}</span>}
        <span className={cx('title', data.code ? 'language' : '')}>{data.title}</span>
      </div>
      {data.switch && <ToggleSwitch />}
    </Comp>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default MenuItem;
