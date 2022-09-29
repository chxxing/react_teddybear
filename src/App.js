import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { company_content } from './data/common';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSlide from './components/MainSlide';
import Event from './pages/Event';
import Gift from './pages/Gift';
import Musium from './pages/Musium';
import Place from './pages/Place';
import Qna from './pages/Qna';
import './css/Pages.scss';


const App = () => {
  return (
    <div className='Wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<MainSlide />}></Route>
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