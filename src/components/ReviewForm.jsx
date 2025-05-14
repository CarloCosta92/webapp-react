import { useState } from 'react';

function ReviewForm({ movieId, onReviewSubmit }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [vote, setVote] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newReview = {
            name: name,
            text: text,
            vote: vote,
            movie_id: movieId
        };

        onReviewSubmit(newReview);

        setName('');
        setText('');
        setVote('');
    };

    return (
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
    );
}

export default ReviewForm;