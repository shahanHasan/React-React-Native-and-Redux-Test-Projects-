import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>tours component</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // ... spread opperator , access to all object key of json
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
