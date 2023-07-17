import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <div>{children}</div>
        <Outlet />
    </div>
  );
};

export default Layout;
