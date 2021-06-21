import React from 'react';
import Header from '../Header/index';
import './MainLayout.styles.scss';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
