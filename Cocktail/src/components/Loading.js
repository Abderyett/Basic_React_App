import React from 'react';
import { useGlobalContext } from '../context';

function Loading() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="hero">
        <h2>Loading</h2>
      </div>
    );
  }
  if (cocktails.length === 0) {
    return (
      <div className="hero">
        <h2>There is no matching result</h2>
      </div>
    );
  }

  return (
    <div className="hero">
      <h2>Cocktail List</h2>
    </div>
  );
}

export default Loading;
