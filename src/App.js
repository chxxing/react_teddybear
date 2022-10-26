import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { company_content, main_content, page_content, QNA } from './data/common';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSlide from './components/MainSlide';
import Gift from './pages/Gift';
import Musium from './pages/Musium';
import Place from './pages/Place';
import Qna from './pages/Qna';
import './css/Pages.scss';


const App = () => {
  return (
    <div className='Wrapper'>
      <Header content={page_content} />
      <Routes>
        <Route path='/' element={<MainSlide content={main_content} />}></Route>
        <Route path='/musium' element={<Musium content={page_content} />}></Route>
        <Route path='/place/*' element={<Place content={page_content} />}></Route>
        <Route path='/gift' element={<Gift content={page_content} />}></Route>
        <Route path='/qna' element={<Qna content={page_content} board={QNA} />}></Route>
      </Routes>
      <Footer content={company_content} />
    </div>
  )
}

export default App;