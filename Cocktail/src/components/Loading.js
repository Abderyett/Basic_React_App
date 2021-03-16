import React from 'react';
import useGlobalContext from '../context';

function Loading() {
  const { loading } = useGlobalContext();
  return <div>Loading</div>;
}

export default Loading;
