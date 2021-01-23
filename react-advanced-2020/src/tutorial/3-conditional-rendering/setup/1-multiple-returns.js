import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  const getUser = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (isError) {
    return (
      <div>
        <h2>Error..</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>{user.login}</h2>
    </div>
  );
};

export default MultipleReturns;
