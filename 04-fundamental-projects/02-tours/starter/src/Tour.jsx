import { useState } from "react";

const Tour = ({tour}) => {
  const [isReadMore, setIsReadMore] = useState(false);

  console.log(tour);
  return (
    <div className="single-tour">
        
      <img src={tour?.image} alt={tour?.name} />
    
      <p className="tour-price">£{tour?.price}</p>
      <button className="info-btn " onClick={() => setIsReadMore(prev => !prev)}>Read More</button>
      <h5 className="title">{tour?.name} </h5>
      <div className="tour-info">
        {isReadMore ? (
          <p>{tour.info}</p>
        ) : (
          <h5>{tour.info.split(",").slice(0, 2)} ...</h5>
        )}
      </div>
    </div>
  );
};

export default Tour;
