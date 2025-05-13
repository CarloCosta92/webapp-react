const ReviewCard = ({ reviews }) => {

    return <div className="movie-reviews">
        <div className="reviews-container">
            {reviews.map(review => {
                return <div key={review.id} className="review">
                    <h4>{review.name}</h4>
                    <p>{review.text}</p>
                    <p>Vote : {review.vote} / 5</p>
                </div>
            })}
        </div>
    </div>
}
export default ReviewCard;