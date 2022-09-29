import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/basic.scss';
import { company_content } from './data/common';
import MainSlide from './components/MainSlide';
import { Route, Routes } from 'react-router-dom';
import Event from './pages/Event';
import Gift from './pages/Gift';
import Musium from './pages/Musium';
import Place from './pages/Place';
import Qna from './pages/Qna';

const App = () => {
  return (
    <div className='Wrapper'>
      <Header />
      <Routes>
        <Route path='/musium' element={<Musium />}></Route>
        <Route path='/place' element={<Place />}></Route>
        <Route path='/event' element={<Event />}></Route>
        <Route path='/gift' element={<Gift />}></Route>
        <Route path='/qna' element={<Qna />}></Route>
      </Routes>
      <Footer content={company_content} />
    </div>
  )
}

export default App;