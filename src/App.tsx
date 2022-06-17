import React from 'react';
import './App.scss';
import './assets/styles.scss';
import {Route, Routes} from "react-router-dom";
import Footer from './components/Footer';
import Home from "./components/Home";
import NavBar from './components/NavBar';
import TimeTable from "./components/TimeTable";
import SEO from './components/SEO';

import './i18n';

const App : React.FC = () => {
  return (
    <div className="App">
      <SEO/>
      <NavBar/>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="time-table" element={<TimeTable />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
