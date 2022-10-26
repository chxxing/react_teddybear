import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Chengdu from './Chengdu';
import Gunsan from './Gunsan';
import Jeju from './Jeju';
import Yeosu from './Yeosu';
import '../css/Place.scss';
import { PLACE, JEJUMSM, YEOSUMSM, CHENGDUMSM, GUNSANMSM } from '../data/placedata.js';


const Place = ({ content }) => {
    return (
        <section className='Place sc'>
            <figure key={content[1].id} className="banner">
                <div className="box">
                    <h2>{content[1].title}</h2>
                    <div className="des">{content[1].des}</div>
                    <div className="tab_menu">
                        <ul>
                            <li><Link to='/place/jeju'>제주</Link></li>
                            <li><Link to='/place/yeosu'>여수</Link></li>
                            <li><Link to='/place/gunsan'>군산</Link></li>
                            <li><Link to='/place/chengdu'>청두</Link></li>
                        </ul>
                    </div>
                </div>
            </figure>
            <div className="inner">
                <Routes>
                    <Route path='/jeju' element={<Jeju placedata={PLACE} content={JEJUMSM} />}></Route>
                    <Route path='/yeosu' element={<Yeosu placedata={PLACE} content={YEOSUMSM} />}></Route>
                    <Route path='/gunsan' element={<Gunsan placedata={PLACE} content={GUNSANMSM} />}></Route>
                    <Route path='/chengdu' element={<Chengdu placedata={PLACE} content={CHENGDUMSM} />}></Route>
                </Routes>
            </div>
        </section >
    )
}

export default Place;