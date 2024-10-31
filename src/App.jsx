// import PortfolioContainer from "./components/portfolioContainer";

// const App = () => <PortfolioContainer />;
// const [currentPage, setCurrentPage] = useState('About');
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
    return (
        // <div>
        //     <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        //     <main className="mx-3" class="page-wrapper"> <Outlet /></main>
        // </div>
        <>
        <Nav />
        <main className="mx-3" class="page-wrapper">
          <Outlet />
        </main>
      </>
    );
}

export default App;
