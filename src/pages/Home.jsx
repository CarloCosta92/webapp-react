import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error('Errore caricamento film:', error));
    }, []);

    return (
        <div>
            <h2 className='mb-3'>Lista Film</h2>
            <div>
                <div className='row gy-3' >
                    {movies.map(movie => (
                        <div className='col-12 col-md-4 ' key={movie.id} >
                            <Link to={`/movie/${movie.id}`} >
                                <div className='card'>

                                    <img src={movie.image} alt={movie.title} className='w-50 mx-auto p-3' />

                                    <div className='card-body'>
                                        <strong className='text-danger'>{movie.title}</strong>
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

export default Home;