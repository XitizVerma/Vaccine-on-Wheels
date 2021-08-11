import './components/index.css';
import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import VaccineOnWheels from './components/VaccineOnWheels.jsx';
import Login from './components/Login.jsx';
import Doctor from './components/Doctor.jsx';
import Applicant from './components/Applicant.jsx';
import ThankYou from './components/ThankYou.jsx';
function App() {
  return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={VaccineOnWheels}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/doctor' component={Doctor}></Route>
          <Route exact path="/applicant" component={Applicant}></Route>
          <Route exact path="/thankyou" component={ThankYou}></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
