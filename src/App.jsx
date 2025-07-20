import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './pages/feed'
import Login from './pages/login'
import Protected from './components/protected';

const App = () => {
  return ( <BrowserRouter >
     <Routes >
      <Route path='/' element={<Login />} />

      <Route element={<Protected />} >
      <Route path='/feed' element={<Feed />} />
      <Route path='/settings' element= {<h6>ayarlar</h6> } />
      </Route>
     </Routes>
  </BrowserRouter>
  );
};

export default App;