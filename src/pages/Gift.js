import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Gift = ({ content }) => {
    return (
        <section className='Gift sc'>
            <figure key={content[3].id} className="banner">
                <div className="box">
                    <h2>{content[3].title}</h2>
                    <div className="des">{content[3].des}</div>
                </div>
            </figure>
            <article className="Article">
                <div className="container">
                    <Slider
                        arrows={false}
                        dots={true}
                        fade={true}
                        autoplay={true}
                        autoplaySpeed={4000}
                    >
                        <figure className='itm01'></figure>
                        <figure className='itm02'></figure>
                        <figure className='itm03'></figure>
                        <figure className='itm04'></figure>
                        <figure className='itm05'></figure>
                        <figure className='itm06'></figure>
                    </Slider>
                </div>
            </article>
        </section >
    )
}

export default Gift;