import Ratings from "./Ratings";

const ReviewCard = ({ reviews }) => {

    return <div className="movie-reviews d-flex align-self-center my-auto ">
        <div className="reviews-container ">
            <h2 className="mb-5">Reviews</h2>
            {reviews.map(review => {
                return <div key={review.id} className="review">
                    <h4>{review.name}</h4>
                    <Ratings vote={review.vote} />
                    <p>{review.text}</p>
                </div>
            })}

        </div>
    </div>
}
export default ReviewCard;