import React from 'react';

const Musium = () => {
    return (
        <section className='Musium'>
            <figure>
                <img src={process.env.PUBLIC_URL + '/assets/images/musium_bg.jpg'} alt="" />
                <h2>테디베어뮤지엄 소개</h2>
                <div className="des">다양한 테마와 재미있는 볼거리가 가득한 국내 유일의 테디베어 박물관에 오신걸 환영 합니다.</div>
            </figure>
            <div className="inner">
                <h3>테디베어란?</h3>

            </div>
        </section>
    )
}

export default Musium