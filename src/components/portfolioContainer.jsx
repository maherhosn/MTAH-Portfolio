import { useState } from "react";
import NavTabs from "./NavTabs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import './../css/style.css';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');


const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
};

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <main className="mx-3" class="page-wrapper"> {renderPage()}</main>
    </div>
);
}