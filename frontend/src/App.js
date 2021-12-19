import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'
import LandingPage from './landingPage';
import Register from './Register';
import HomePage from './HomePage';
import AddXray from './AddXray';
import ForgotPass from './ForgotPass';

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
          <Route exact path='/addXray' element={< AddXray />}>
          </Route>
          <Route exact path='/forgotPass' element={< ForgotPass />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   );
}

export default App;