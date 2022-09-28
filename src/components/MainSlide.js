import React, { useRef } from 'react';
import Slider from "react-slick";
import { main_content } from '../data/common.js';
import "slick-carousel/slick/slick.css";
import '../css/MainSlide.scss';
import { Link } from 'react-router-dom';
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";


const MainSlide = () => {
    const SLIDE = useRef(null);
    return (
        <section className='MainSlide'>
            <Slider
                arrows={false}
                fade={true}
                autoplay={true}
                autoplaySpeed={4000}
                pauseOnFocus={false}
                pauseOnHover={false}
                ref={SLIDE}
            >
                {
                    main_content.map((it, idx) => {
                        return (
                            <figure className={`itm0${idx + 1}`} key={it.id}>
                                <div className="inner">
                                    <strong>{it.strong}</strong>
                                    <h2>{it.title}</h2>
                                    <div className="des">{it.des}</div>
                                    <Link to={it.link}><div className="more">둘러보기</div></Link>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className='Arrows'>
                <CgChevronLeft onClick={() => SLIDE.current.slickPrev()} />
                <CgChevronRight onClick={() => SLIDE.current.slickNext()} />
            </div>
        </section>
    )
}

export default MainSlide;
