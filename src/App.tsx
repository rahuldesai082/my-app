import React from 'react';
import './App.css';
import Home from './Page/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ABOUT_ME, HOME } from './route';
import AboutMe from './Page/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home/>} />
          <Route path={ABOUT_ME} element={<AboutMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;