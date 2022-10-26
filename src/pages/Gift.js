import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Gift = ({ content }) => {
    return (
        <section className='Gift sc'>
            <figure key={content[2].id} className="banner">
                <div className="box">
                    <h2>{content[2].title}</h2>
                    <div className="des">{content[2].des}</div>
                </div>
            </figure>
            <article className="Article">
                <h3>프리미엄 기프트샵</h3>
                <div className="description">
                    키가 130cm에 이르는 컬리브라운 점보를 시작으로 테디베어뮤지엄만의 다양한 테디베어를 만나보실 수 있습니다.<br />
                    수많은 테디베어들 중에 드라마, 영화, CF에 출현했던 유명한 테디베어를 찾는 재미도 쏠쏠하답니다.<br />
                    테디베어 봉제인형뿐만 아니라 가방, 핸드폰줄 등 실생활에 유용하고 보기에도 예쁜 다양한 소품과 액세서리가 판매되고 있습니다.<br />
                    사용하는 분의 센스가 돋보일 다양한 소품과 액세서리를 만나보세요.
                </div>
                <div className="container">
                    <Slider
                        arrows={false}
                        dots={true}
                        fade={true}
                        autoplay={true}
                        autoplaySpeed={4000}
                    >
                        <figure className='itm01'>gift01</figure>
                        <figure className='itm02'>gift02</figure>
                        <figure className='itm03'>gift03</figure>
                        <figure className='itm04'>gift04</figure>
                        <figure className='itm05'>gift05</figure>
                        <figure className='itm06'>gift06</figure>
                    </Slider>

                </div>
            </article>
        </section >
    )
}

export default Gift;