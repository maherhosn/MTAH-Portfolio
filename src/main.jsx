import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import './css/style.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element:<About />,
            },
            {
                path: '/About',
                element: <About />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
