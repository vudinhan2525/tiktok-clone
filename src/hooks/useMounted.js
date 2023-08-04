import React, { useState, useEffect } from 'react';

function useMounted() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(false);
  }, []);

  return mounted;
}

export default useMounted;
