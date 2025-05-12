import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav>
                <h1><Link to="/">Lista dei film</Link></h1>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;