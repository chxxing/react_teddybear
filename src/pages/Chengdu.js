import React from 'react';

const CHENGDUMSM = [
    { id: 1, title: "중국관", des: "유서 깊은 중국의 유적들과 전통, 그리고 신화들을 확인하실 수 있습니다." },
    { id: 2, title: "신 세계 7대 불가사의", des: "전 세계 각지에 자리하고 있는 신비하고 아름다운 유적들을 테디베어들과 함께 아름답게 표현하였습니다." },
    { id: 3, title: "해양관", des: "신비한 바다생물들이 살아 헤엄치는 해양 수족관을 그대로 옮겨놓은 듯한 이곳에서 인어공주 이야기와 각종 해양쇼를 만나보실 수 있습니다." },
    { id: 4, title: "판다관", des: "판다의 고향인 청두에 자리한 판다원을 모티브로 하여 판다의 탄생과 공원을 살아 움직이는 듯 생생하게 선보입니다." },
    { id: 5, title: "앤틱/디자이너 박물관", des: "100여 년의 테디베어 역사를 각종 앤틱베어들과 함께 전시하였으며 세계 유명 디자이너들이 만든 테디베어들도 확인하실 수 있습니다." },
    { id: 6, title: "아트 갤러리", des: "유명 조각상 및 명화들을 테디베어를 이용한 패러디로 재탄생 시켰습니다." },
    { id: 7, title: "한류관", des: "한국의 전통 및 민화에서부터 TV드라마 ‘궁’에 이르기까지 다양한 한국의 모습을 표현해냈습니다." },
    { id: 8, title: "트릭아트관", des: "신기한 그림들이 관객들과 함께 재미있게 표현될 수 있는 공간입니다." },
    { id: 9, title: "3D 극장", des: "모든 연령대의 사람들이 흥미롭게 즐길 수 있는 3D 극장을 통해 다양한 콘텐츠를 선보이고 있습니다." },
    { id: 10, title: "뮤지엄 샵", des: "테디베어뮤지엄에서만 만나볼 수 있는 품격있는 테디베어들과 다양한 상품들을 한자리에서 구입하실 수 있습니다." },
]

const Chengdu = ({ placedata }) => {
    return (
        <div className='CHENGDU place_section'>
            <h3>{placedata[3].area}</h3>
            <div className="des">{placedata[3].descript}</div>
            <div className="grid_container">
                {
                    CHENGDUMSM.map((it, idx) => {
                        return (
                            <figure key={it.id}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/chengdu0' + it.id + '.png'} alt="" />
                                <div className="description">
                                    <div className="about">{it.title}</div>
                                    <div className='txtbox'>{it.des}</div>
                                </div>
                            </figure>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Chengdu
