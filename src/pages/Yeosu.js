import React from 'react';

const YEOSUMSM = [
    { id: 1, title: "Wonders of America 1", des: "록키산맥, 러쉬모어산의 아름다움과 미국 항공우주국의 신비" },
    { id: 2, title: "The World of Sweet Memories", des: "행복한 기억만 넘쳐나는 테디베어 나라" },
    { id: 3, title: "Wonders of America 2", des: "테디베어와 함께 미국의 대표 관광지로 떠나볼까요?" },
    { id: 4, title: "Dino Square", des: "수백만 년 전으로 공룡을 찾아 떠난 테디베어" },
    { id: 5, title: "Elvis Theatre", des: "테디베어가 들려주는 엘비스 프레슬리의 히트곡 퍼레이드" },
    { id: 6, title: "Aquarium", des: "테디베어, 드디어 물 속의 신비를 찾아 떠나다." },
    { id: 7, title: "Photo Zone", des: "유명인사들과 인증샷 한판" },
    { id: 8, title: "Save the Planet", des: "멸종 위기의 동물들에게 힘을 실어주세요." },
    { id: 9, title: "Famous Teddy Bear", des: "전세계 어디에서도 볼 수 없는 최고의 테디베어 컬렉션" },
    { id: 10, title: "Art Gallery", des: "테디베어와 예술작품이 만난다면?" },
    { id: 11, title: "Play Room", des: "테디베어와 헤어지는게 아쉽다면…" },
    { id: 12, title: "뮤지엄 샵", des: "돌아볼 수 있는 추억을 담아 갈 수도…" },
]

const Yeosu = ({ placedata }) => {
    return (
        <div className='YEOSU place_section'>
            <h3>{placedata[1].area}</h3>
            <div className="des">{placedata[1].descript}</div>
            <div className="grid_container">
                {
                    YEOSUMSM.map((it, idx) => {
                        return (
                            <figure key={it.id}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/yeosu0' + it.id + '.png'} alt="" />
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

export default Yeosu
