const Review = ({review}) => {
    return (
        <div className="review">
            <div className="img-container">
                <img src={review.image} className="person-img"/>
                <p className="author">{review.name}</p>
                <p className="job">{review.job}</p>
                <p className="text">{review.text}</p>
            </div>

        </div>
    )
}

export default Review