import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoaderContext from '../contexts/LoaderContext';

function MoviesList() {
    const [movies, setMovies] = useState([]);
    const { setLoading } = useContext(LoaderContext);


    useEffect(() => {
        setLoading(true);

        axios.get('http://127.0.0.1:3000/movies')
            .then(response => {
                setMovies(response.data);

            })
            .catch(error => {
                console.error('Errore caricamento film:', error);

            })

            .finally(() => setLoading(false))
    }, []);

    return (
        <div className='m-3'>
            <h2 className='mb-3'>Movies List</h2>
            <div>
                <div className='row gy-3 ' >
                    {movies.map(movie => (
                        <div className='col-12 col-md-4  ' key={movie.id} >
                            <Link to={`/movies/${movie.id}`} className='text-decoration-none' >
                                <div className='card bg-warning'>

                                    <img src={movie.image} alt={movie.title} className='w-50 mx-auto p-3' />

                                    <div className='card-body text-center'>
                                        <strong className='text-danger '>{movie.title}</strong>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MoviesList;