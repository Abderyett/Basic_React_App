import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeItem = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  // Fetch data
  const getTours = async () => {
    try {
      const { data } = await axios.get(url);
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" type="button" onClick={getTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <div className="title">
          <Tours tours={tours} removeItem={removeItem} />
        </div>
      </main>
    </>
  );
};

export default App;
