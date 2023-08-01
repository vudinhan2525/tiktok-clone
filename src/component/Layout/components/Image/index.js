import { useState, forwardRef } from 'react';
import images from '~/assets/image';
function Image({ src, ...props }, ref) {
  const [fallback, setFallback] = useState('');
  return <img src={fallback || src} ref={ref} {...props} onError={() => setFallback(images.noImage)} />;
}

export default forwardRef(Image);
