import React, { useCallback, useEffect } from 'react';
import EarthGlobe from '../lib/earth-globe';

const viewerRef = React.createRef();

function GlobeSandbox() {
  const onSubmit = useCallback(e => {
    e.preventDefault();
    const { imageUrl } = e.target;
    console.log(imageUrl.value);
    // sendData({ email: email.value, name: name.value })
    e.target.reset();
  }, [])

  useEffect(() => {
    new EarthGlobe(viewerRef.current);
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="imageUrl" />
        <button type="submit">Try!</button>
      </form>
      <div
        ref={viewerRef}
        style={{ width: '800px', height: '600px' }}
      />
    </div>
  );
}

export default GlobeSandbox;
