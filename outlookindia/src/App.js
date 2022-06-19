import logo from './logo.svg';

import Footer from './FooterItems/Footer';

// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css'
import OutlookLogo from './components/OutlookLogo';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
function App() {
  return (
    <div >
      <OutlookLogo />
      <Navbar />
      <AllRoutes />
      <Footer />

    </div>
  );
}

export default App;
