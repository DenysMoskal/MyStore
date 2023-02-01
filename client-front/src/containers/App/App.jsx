import React from 'react';

import Header from '@components/Header';

import styles from './App.module.scss';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} element={route.element} path={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
