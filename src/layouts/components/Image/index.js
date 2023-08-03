import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import images from '~/assets/image';
const Image = React.forwardRef(function ({ src, alt, ...props }, ref) {
  const [fallback, setFallback] = useState('');
  return <img src={fallback || src} ref={ref} {...props} alt={alt} onError={() => setFallback(images.noImage)} />;
});
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default Image;
