import React from 'react';

const ABOUTMSM = [
    { id: 1, title: "TEDDY BEAR", des: "테디베어뮤지엄에 전시되는 테디베어들은 고가의 산양모 Mohair 원단으로 JS&F의 디자이너들이 직접 손으로 작업하여 각각의 인형에 캐릭터를 부여합니다. 또한 테디베어 의상은 각 Scene에 맞는 철저한 고증을 통해 만들어지게 됩니다." },
    { id: 2, title: "ANIMATRONICS", des: "테디베어뮤지엄의 테디베어들은 모터 구동으로 움직이게 되어있어 아날로그의 향수를 불러일으킴과 동시에 테디베어뮤지엄의 모터 구동만의 부드러움은 테디베어가 마치 살아 있는 듯한 느낌까지 줍니다." },
    { id: 3, title: "DIORAMA", des: "철저한 고증을 통해 재현되는 건물들과 풍경은 마치 예술작품을 감상하는 듯 감탄을 자아냅니다." },
    { id: 4, title: "STORY", des: "각각의 Scene에 단순 인형 나열이 아닌 이야기를 부여하여 관객들에게 찾아 보는 즐거움을 줍니다." },
    { id: 5, title: "PARODY", des: "세계 최초의 테디베어 부조 제작 등, 국내외 최고의 테디베어 아티스트들이 재해석한 작품들은 원작 이상의 감동을 줍니다." }
]

const Musium = ({ content }) => {
    return (
        <section className='Musium sc'>
            <figure key={content[0].id} className="banner">
                <div className="box">
                    <h2>{content[0].title}</h2>
                    <div className="des">{content[0].des}</div>
                </div>
            </figure>
            <div className="bg">
                <article className='Article'>
                    <h3>테디베어란?</h3>
                    <div className="container">
                        <figure className='bearimg'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/musium_sc.jpg'} alt="" />
                        </figure>
                        <div className="description">
                            <p>
                                <strong>테디베어란 이름은 바로 미국의 26대 대통령인<br />테어도어 루스벨트(Theodore Roosevelt)의 애칭인 테디에서 나온 말 입니다.</strong><br /><br />
                                사냥에서 곰을 한 마리도 잡지 못한 대통령에게 보좌관들이 새끼 곰을 산 채로 잡아다 사냥한 것처럼 총을 쏘라고 하자 이를 거절했다는 일화가 미국 전역에 퍼지면서, 사람들이 이를 소재로 Teddy Bear을 만들게 된 것이지요.<br /><br />
                                Teddy Bear를 상품화한 사람은 미국의 모리스 미첨과 독일의 마가레테 슈타이프인데 슈파이프사는 현재 세계 최고의 봉제 인형 제조회사가 됐습니다.<br /><br />
                                Teddy Bear는 미국의 대통령 루즈벨트와 워싱턴 포스트 지의 기자이자 유명삽화가 클리포트 베리먼이 이를 사업 아이템으로 생각해 내고 루즈벨트에게 직접 서신을 보내 허락을 맡은 잡하점 주인 모리스 미첨 그리고 이 시기에 독일에서 3000마리의 곰인형을 만들어 미국으로 들여온 슈타이프사의 우연한 만남으로 탄생된 것입니다.<br /><br />
                                이후 영국, 일본 등 굴지의 Teddy Bear 제조사들이 생기면서 Teddy Bear는 100년이 넘는 세월동안 전세계 어린이들은 물론 수집가들의 사랑을 받고 있는 장난감이 되었습니다.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            <article className='Article'>
                <h3>테디베어뮤지엄은?</h3>
                <div className="grid_container">
                    {
                        ABOUTMSM.map((it, idx) => {
                            return (
                                <figure>
                                    <img src={process.env.PUBLIC_URL + '/assets/images/about0' + it.id + '.png'} alt="" />
                                    <div className="description">
                                        <div className="about">{it.title}</div>
                                        <div className='txtbox'>{it.des}</div>
                                    </div>
                                </figure>
                            )
                        })
                    }
                </div>
            </article>
        </section >
    )
}

export default Musium;