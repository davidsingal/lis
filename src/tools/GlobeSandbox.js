import React, { useCallback, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import EarthGlobe from '../lib/earth-globe';

const viewerRef = React.createRef();

function GlobeSandbox() {
  let earthGlobe = new EarthGlobe();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const { imageUrl } = e.target;
    earthGlobe.setBasemapUrl(imageUrl.value);
    e.target.reset();
  }, [earthGlobe]);

  const resetBasemap = useCallback(() => earthGlobe.resetBasemap(), [earthGlobe]);

  useEffect(() => {
    earthGlobe.start(viewerRef.current);
  }, [earthGlobe]);

  return (
    <div>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <TextField id="imageUrl" label="Paste your image URL here" style={{ width: '400px' }} />
        <Button variant="contained" color="primary" type="submit">Try!</Button>
      </form>
      <div
        ref={viewerRef}
        style={{ width: '800px', height: '600px' }}
      />
      <Button variant="contained" color="primary" onClick={resetBasemap}>Reset basemap</Button>
    </div>
  );
}

export default GlobeSandbox;
