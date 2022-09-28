import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/basic.scss';
import { company_content } from './data/common';
import MainSlide from './components/MainSlide';

const App = () => {
  return (
    <div className='Wrapper'>
      <Header />
      <MainSlide />
      <Footer content={company_content} />
    </div>
  )
}

export default App;