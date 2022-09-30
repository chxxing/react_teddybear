import React from 'react';

const GUNSANMSM = [
    { id: 1, title: "DIORAMA", des: "테디와 친구들이 함께 타임요트를 타고 전 세계 도시로 시공간 여행을 떠나보세요! 사라진 테순이는 과연 어디에 있을까요?" },
    { id: 2, title: "LOVE STORY", des: "전 세계 역사 속에 기록된 다양한 러브스토리의 주인공이 테디베어로 표현되었습니다. 연인과 함께 손잡고 관람해 보세요" },
    { id: 3, title: "KENYA PLAINS", des: "아프리카 케냐의 드넓은 초원엔 수많은 동물 친구들로 가득합니다. 춤추는 원주민 테디베어와 함께 동물 친구들을 만나보세요." },
    { id: 4, title: "Gunsan History", des: "군산 관광지로 유명한 히로쓰가옥, 새만금, 군산항등 테디베어 친구들과 군산 시간여행" },
    { id: 5, title: "ART GALLERY", des: "세계 명작 그림과 조각상을 테디베어로 표현한 아트갤러리 입니다. 100년이 넘은 앤틱테디베어들과, 홀로그램 루이비통 베어도 놓치지 마세요." },
    { id: 6, title: "뮤지엄 샵", des: "테디베어뮤지엄에서만 만나볼 수 있는 품격있는 테디베어들과 다양한 상품들을 한자리에서 구입하실 수 있습니다." },
]

const Gunsan = ({ placedata }) => {
    return (
        <div className='GUNSAN place_section'>
            <h3>{placedata[2].area}</h3>
            <div className="des">{placedata[2].descript}</div>
            <div className="grid_container">
                {
                    GUNSANMSM.map((it, idx) => {
                        return (
                            <figure key={it.id}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/gunsan0' + it.id + '.png'} alt="" />
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

export default Gunsan
