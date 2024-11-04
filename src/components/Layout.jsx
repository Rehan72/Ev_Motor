import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './Layout.css';

const Layout = () => (
  <>
    <Header />
    <div className="layout">
      {/* <NavigationBar /> */}
      <main>
        <Outlet />
      </main>
    </div>
    <Footer />
  </>
);

export default Layout;
