import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'
import LandingPage from './landingPage';
import Register from './Register';
import HomePage from './HomePage';

function App() {

  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< LandingPage />}>
          </Route>
          <Route exact path='/login' element={< Login />}>
          </Route>
          <Route exact path='/register' element={< Register />}>
          </Route>
          <Route exact path='/home' element={< HomePage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   );
}

export default App;