import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';
const cx = classNames.bind(styles);
function Wrapper({ children, cls = '' }) {
  return <div className={cx('wrapper', cls)}>{children}</div>;
}
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  cls: PropTypes.string,
};
export default Wrapper;
