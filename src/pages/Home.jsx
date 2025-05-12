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
            <h2>Lista Film</h2>
            <ul >
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={movie.image} alt={movie.title} />
                            <strong>{movie.title}</strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;