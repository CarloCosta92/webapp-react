import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import LoaderContext from '../contexts/LoaderContext';

function MovieCard() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);
    const { setLoading } = useContext(LoaderContext);

    useEffect(() => {
        if (id) {
            movieData();
        }
    }, [id]);

    const movieData = () => {

        setLoading(true)
        axios.get(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => {
                console.log(response.data);
                setMovie(response.data.movie);
                setReviews(response.data.reviews);
            })
            .catch(error => {
                console.error("Errore nella chiamata API:", error);
            })

            .finally(() => setLoading(false));
    };

    const handleReviewSubmit = (newReview) => {
        setLoading(true)
        console.log(newReview);
        axios.post(`http://127.0.0.1:3000/movies/${id}/reviews`, newReview)
            .then(response => {
                console.log("Recensione inviata con successo:", response);
                movieData();
            })
            .catch(error => {
                console.error("Errore nell'invio della recensione:", error);
            })
            .finally(() => setLoading(false));
    };

    if (!movie) {
        return <div>Caricamento delle card</div>;
    }
    return (
        <div className='row justify-content-center  '>
            <div className='card col-6 col-md-4 me-3 bg-warning mb-3'>
                <img src={movie.image} alt={movie.title} className='w-50 mx-auto my-auto p-2' />
                <div className='p-3'>
                    <div className='card-title'>
                        <h2 className='mb-3 text-center'>{movie.title}</h2>
                    </div>
                    <div className='card-body'>
                        <p><strong>Description:</strong> {movie.abstract}</p>
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Release year:</strong> {movie.release_year}</p>
                    </div>

                </div>
            </div>
            <div className='card col-6 col-md-4 bg-warning mb-3'>
                <ReviewCard reviews={reviews} />
            </div>

            <ReviewForm movieId={id} onReviewSubmit={handleReviewSubmit} /> {/* Usa il nuovo componente */}
        </div>
    );
}

export default MovieCard;