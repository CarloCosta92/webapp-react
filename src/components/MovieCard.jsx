import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieCard() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:3000/movies/${id}`)
                .then(response => {
                    console.log(response.data);
                    setMovie(response.data.movie);
                })
                .catch(error => {
                    console.error("Errore nella chiamata API:", error);
                });
        }
    }, [id]);


    if (!movie) {
        return <div>Caricamento delle card</div>;
    }
    return (
        <div className='row gy-3 '>
            <div className='card col-12 col-md-4 '>
                <img src={movie.image} alt={movie.title} className='w-50 mx-auto my-auto p-2' />
                <div className='p-3'>
                    <div className='card-title'>
                        <h2 className='mb-3 text-center'>{movie.title}</h2>
                    </div>
                    <div className='card-body'>
                        <p><strong>Descrizione:</strong> {movie.abstract}</p>
                        <p><strong>Regista:</strong> {movie.director}</p>
                        <p><strong>Data di uscita:</strong> {movie.release_year}</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default MovieCard;