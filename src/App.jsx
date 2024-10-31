import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
    return (
        <>
        <Nav />
        <main className="mx-3" class="page-wrapper">
          <Outlet />
        </main>
      </>
    );
}

export default App;
