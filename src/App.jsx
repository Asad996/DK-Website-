import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import OnsiteJobs from './Components/Pages/OnsiteJobs';
import RemoteJobs from './Components/Pages/RemoteJobs';
import OnsiteInternship from './Components/Pages/OnsiteIntership';
import RemoteInternship from './Components/Pages/RemoteIntership';
import JobPost from './Components/Pages/JobPost';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/onsitejobs' element={<OnsiteJobs />} />
            <Route path='/remotejobs' element={<RemoteJobs />} />
            <Route path='/onsiteintern' element={<OnsiteInternship />} />
            <Route path='/remoteintern' element={<RemoteInternship />} />
            <Route path='/postjob' element={<JobPost/>} />
          <h1>aksjfg</h1>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
