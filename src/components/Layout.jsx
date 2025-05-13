import { Outlet, Link, NavLink } from 'react-router-dom';

function Layout() {
    return (
        <>
            <header>
                <h1 className='text-center text-danger mb-3 p-3'>WEB APP REACT</h1>
                <ul className='d-flex list-unstyled justify-content-center'>
                    <li>
                        <NavLink to="/" className='text-decoration-none m-3 text-danger'> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className='text-decoration-none m-3 text-danger '> Movies </NavLink>
                    </li>
                </ul>
            </header>


            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;