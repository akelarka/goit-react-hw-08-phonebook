import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './modules/AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
