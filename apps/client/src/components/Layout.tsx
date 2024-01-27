import React, { PropsWithChildren } from 'react';
import NavBar from './common/NavBar';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <NavBar/>
      {children}
    </>
  );
};

export default Layout;
