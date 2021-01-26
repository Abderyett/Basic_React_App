import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import axios from 'axios';

const App = () => {
  const url = 'https://course-api.com/react-tabs-project';
  const [experiences, setExperiences] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      const sortedData = data.sort((a, b) => b.order - a.order);
      const filtredCompny = sortedData.map((item) => item.company);
      setExperiences(sortedData);
      setCompanies(filtredCompny);
      setLoading(false);
    } catch (error) {
      console.log('Oh there is an Error!');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { id, title, company, dates, duties } = experiences[value];
  return (
    <>
      <section className="section" key={id}>
        <div className="title">
          <h2>expierience</h2>
          <div className="underline" />
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {companies.map((el, index) => (
              <button
                key={el.id}
                type="button"
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {el}
              </button>
            ))}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
};

export default App;
