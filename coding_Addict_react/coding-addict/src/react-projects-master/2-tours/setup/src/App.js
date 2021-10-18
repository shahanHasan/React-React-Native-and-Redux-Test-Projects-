import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, settours] = useState([]);

  // Any Operation on state related to add and delete
  // Has to be done where the state is declared.
  // Remove tour button is on tour component but it
  // uses state from APP.js as prop so the remove function
  // is declared here.
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    settours(newTours);
  };

  // API
  const FetchData = async () => {
    // USE THIS or with try catch

    // setLoading(true);
    // const response = await fetch(url);
    // const tours = await response.json();
    // console.log(tours);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      settours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // fetch once in useEffect
  useEffect(() => {
    FetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={FetchData}>
            {" "}
            Add Tours
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
