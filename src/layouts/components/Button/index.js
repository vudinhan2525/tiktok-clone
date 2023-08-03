import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  size = 'm',
  children,
  disable,
  cls = '',
  onClick,
  rounded,
  leftIcon,
  rightIcon,
  outline = false,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (disable) {
    Object.keys(props).forEach((key, index) => {
      if (key.includes('on') && typeof props[key] === 'function') delete props[key];
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    Comp = 'a';
    props.href = href;
  }
  let classes = cx(`wrapped`, { primary, outline, disable, rounded }, size, cls);
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  disable: PropTypes.bool,
  cls: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  outline: PropTypes.bool,
};
export default Button;
