import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../component/layout/Main';

const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Main />}>
        {/* <Route index element={<Main />} /> */}
        </Route>
    </Routes>
  );
  
  export default AppRouter;