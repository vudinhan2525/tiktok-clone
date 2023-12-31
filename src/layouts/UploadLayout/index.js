import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
function UploadLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
UploadLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UploadLayout;
