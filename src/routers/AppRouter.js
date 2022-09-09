import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../component/layout/Main';

const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
  
  export default AppRouter;