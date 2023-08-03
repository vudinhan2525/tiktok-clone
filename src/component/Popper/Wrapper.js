import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';
const cx = classNames.bind(styles);
function Wrapper({ children, clx = '' }) {
  return <div className={cx('wrapper', clx)}>{children}</div>;
}
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  clx: PropTypes.string,
};
export default Wrapper;
