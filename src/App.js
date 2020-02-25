import React from 'react';
import { AppBar, Toolbar, Typography }from '@material-ui/core';
import GlobeSandbox from './tools/GlobeSandbox';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            LIS
          </Typography>
        </Toolbar>
      </AppBar>
      <GlobeSandbox />
    </div>
  );
}

export default App;
