import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from '../src/pages/Footer';

function App() {
    return (
        <>
        <Nav />
        <main className="page-wrapper">
          <Outlet />
          <Footer />
        </main>
      </>
    );
}

export default App;
