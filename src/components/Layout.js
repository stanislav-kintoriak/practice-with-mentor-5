import { Outlet } from 'react-router-dom';
import { Navigation } from './navigation/navigation';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
