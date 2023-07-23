import { useState, useEffect } from "react";
import reviews from "./data";
import Review from "./Review";
const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rev, setReviews] = useState(reviews[activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : prev));
  };
  const handleBack = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleRandom = () => {
    setActiveIndex(Math.floor(Math.random() * reviews.length));
  };
  useEffect(() => {
    setReviews(reviews[activeIndex]);
  }, [activeIndex]);
  return (
    <div>
      <h1>Reviews</h1>
      <button className="prev-btn" onClick={handleBack}>
        Prev
      </button>
      <button className="next-btn" onClick={handleRandom}>
        Random
      </button>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>

      <Review review={rev} />
    </div>
  );
};
export default App;
