import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'
import LandingPage from './landingPage';
import Register from './Register';
import HomePage from './HomePage';
import AddXray from './AddXray';
import ForgotPass from './ForgotPass';
import Profile from './Profile';
import XrayHistory from './XrayHistory';
import EditProfile from './EditProfile';
import TreatmentInfo from './TreatmentInfo';
import DiseaseInfo from './DiseaseInfo';

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
          <Route exact path='/forgotPass' element={< ForgotPass />}>
          </Route>
          <Route exact path='/user' element={< Profile />}>
          </Route>
          <Route exact path='/generateReport' element={< AddXray />}>
          </Route>
          <Route exact path='/history' element={< XrayHistory />}>
          </Route>
          <Route exact path='/user/update' element={< EditProfile />}>
          </Route>
          <Route exact path='/diseaseTreatmentInfo' element={< TreatmentInfo />}>
          </Route>
          <Route exact path='/diseaseDetail' element={< DiseaseInfo />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   );
}

export default App;