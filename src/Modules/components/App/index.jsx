import React from 'react';
import { HashRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from "../../router";
// Material ui
import MaterialThemeProvider from '../../../Lib/contexts/ThemeProvider';

const AppContainer = () => (
  <HashRouter>
    <CssBaseline />
    <MaterialThemeProvider>
      <AppRouter />
    </MaterialThemeProvider>
  </HashRouter>
);

export default AppContainer;
