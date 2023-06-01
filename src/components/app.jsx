/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable object-curly-newline */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import '../style.scss';
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Calendar from './calendar';
// import NavBar from './navbar';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        {/* <NavBar />
        <Error /> */}
        <Routes>
          <Route path="/" element={<Calendar />} />
          {/* <Route path="/signin" element={<Login />} />
          <Route path="/posts/:postID" element={<RequireAuth><Post /></RequireAuth>} />
          <Route path="/posts/new" element={<RequireAuth> <NewPost /> </RequireAuth>} />
          <Route path="*" element={<RequireAuth><div>post not found</div></RequireAuth>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;