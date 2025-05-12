import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:3000/movies/${id}`)
                .then(response => setMovie(response.data))
                .catch(error => console.error("Errore nella chiamata API:", error));
        }
    }, [id]);

    if (!movie) {
        return <div>Caricamento delle card</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p><strong>Descrizione:</strong> {movie.abstract}</p>
            <p><strong>Regista:</strong> {movie.director}</p>
            <p><strong>Data di uscita:</strong> {movie.release_year}</p>
        </div>
    );
}

export default MovieDetail;

