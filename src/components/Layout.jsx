import { Outlet, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import LoaderContext from "../contexts/LoaderContext"
import Loader from './Loader';

function Layout() {
    const { loading } = useContext(LoaderContext);
    console.log(loading)
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
                {loading && <Loader />}
            </main>
        </>
    );
}

export default Layout;