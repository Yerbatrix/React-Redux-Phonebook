import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        padding: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <AppBar />
        <div style={{ padding: '16px' }}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};
