// src/App.jsx
import React from 'react';
import HomePageUnauthorised from './Components/HomePageUnauthorised';
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageAuthorised from './Components/HomePageAuthorised';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import OrganisationPageSkeleton from './Components/Organisation/OrganisationPageSkeleton';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePageUnauthorised/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/auth' element={<HomePageAuthorised/>}/>
        <Route path='/bookmarks' element={<Bookmarks/>}/>
        <Route path='/organisation/:id' element={<OrganisationPageSkeleton/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
