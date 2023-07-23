import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, setTours }) => {
  // Assuming removeTour function exists and removes a tour by its id from the tours array
  const handleRemoveTour = (id) => {
    // Your implementation of removeTour function here
    const filtered = tours.filter(item => item.id !== id)

    setTours(filtered)
  };

  return (
    <>
      {tours.map((item) => (
        <div key={item.id}>
          <Tour tour={item} />
          <button onClick={() => handleRemoveTour(item.id)}>Remove Tour</button>
        </div>
      ))}
    </>
  );
};

export default Tours;
