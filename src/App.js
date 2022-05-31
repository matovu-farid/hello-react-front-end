import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greeting from './components/Greeting';
import { fetchRandomMessage } from './app/message';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomMessage());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
};

export default App;
