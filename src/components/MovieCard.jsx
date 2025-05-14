
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from './ReviewCard';

function MovieCard() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [vote, setVote] = useState('');

    useEffect(() => {
        if (id) {
            movieData();
        }
    }, [id]);

    const movieData = () => {
        axios.get(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => {
                console.log(response.data);
                setMovie(response.data.movie);
                setReviews(response.data.reviews);
            })
            .catch(error => {
                console.error("Errore nella chiamata API:", error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newReview = {
            name: name,
            text: text,
            vote: vote,
            movie_id: id
        };

        console.log(newReview)

        axios.post(`http://127.0.0.1:3000/movies/${id}/reviews`, newReview)
            .then(response => {
                console.log("Recensione inviata con successo:", response);

                movieData();
                setName('');
                setText('');
                setVote('');
            })
            .catch(error => {
                console.error("Errore nell'invio della recensione:", error);

            });
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

            <div className='card col col-md-4 p-3 bg-warning'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Inserisci il tuo nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Inserisci la tua recensione</label>
                        <textarea
                            className="form-control"
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows="3"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">Inserisci il tuo voto</label>
                        <input
                            type="number"
                            className="form-control"
                            id="vote"
                            value={vote}
                            onChange={(e) => setVote(e.target.value)}
                            min="1"
                            max="5"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default MovieCard;