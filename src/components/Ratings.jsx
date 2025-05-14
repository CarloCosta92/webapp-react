const Rating = ({ vote }) => {

    const maxValue = 5
    const Votes = [...Array(maxValue)]


    return <div>
        <span>Ratings : </span>
        {Votes.map((_, index) => {
            if (index < vote) {
                return <i key={index} className="fa-solid fa-star"></i>
            } else {
                return <i key={index} className="fa-regular fa-star"></i>
            }
        })
        }
    </div>
}


export default Rating;