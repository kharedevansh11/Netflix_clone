import React from 'react';
import { Counter } from './features/counter/Counter';
import Homescreen from './components/Homescreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';

import './App.css';

function App() {
  const user= null;
  return (
    <div className="app"> 
      <Router>
       {!user? (<Login/>) : (<Routes>
        <Route exact path='/' Component={Homescreen} />
       </Routes>)
              }
  

      </Router>

    </div>
  );
}

export default App;
