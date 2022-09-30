import React from 'react';

const JEJUMSM = [
    { id: 1, title: "역사관(The History)", des: "테디베어의 100년사와 인류의 100년사를 동시에 즐기다! 타임머신을 타고 미래에서 온 테디베어 마티(Marty)와 함께 인류의 100년사를 돌아보고 1902년 테디베어 탄생 이래 세계 각지에서 수집한 명품 테디베어들을 감상할 수 있습니다." },
    { id: 2, title: "예술관(The Art)", des: "테디베어의 100년사와 인류의 100년사를 동시에 즐기다! 타임머신을 타고 미래에서 온 테디베어 마티(Marty)와 함께 인류의 100년사를 돌아보고 1902년 테디베어 탄생 이래 세계 각지에서 수집한 명품 테디베어들을 감상할 수 있습니다." },
    { id: 3, title: "기획전시", des: "테디베어의 100년사와 인류의 100년사를 동시에 즐기다! 타임머신을 타고 미래에서 온 테디베어 마티(Marty)와 함께 인류의 100년사를 돌아보고 1902년 테디베어 탄생 이래 세계 각지에서 수집한 명품 테디베어들을 감상할 수 있습니다." },
    { id: 4, title: "야외정원", des: "테디베어의 100년사와 인류의 100년사를 동시에 즐기다! 타임머신을 타고 미래에서 온 테디베어 마티(Marty)와 함께 인류의 100년사를 돌아보고 1902년 테디베어 탄생 이래 세계 각지에서 수집한 명품 테디베어들을 감상할 수 있습니다." },
    { id: 5, title: "슬로우 베어(야외무대)", des: "테디베어의 100년사와 인류의 100년사를 동시에 즐기다! 타임머신을 타고 미래에서 온 테디베어 마티(Marty)와 함께 인류의 100년사를 돌아보고 1902년 테디베어 탄생 이래 세계 각지에서 수집한 명품 테디베어들을 감상할 수 있습니다." },
    { id: 6, title: "엘비스 공연장", des: "테디베어의 100년사와 인류의 100년사를 동시에 즐기다! 타임머신을 타고 미래에서 온 테디베어 마티(Marty)와 함께 인류의 100년사를 돌아보고 1902년 테디베어 탄생 이래 세계 각지에서 수집한 명품 테디베어들을 감상할 수 있습니다." },
    { id: 7, title: "뮤지엄 샵", des: "테디베어의 모든 것이 펼쳐진 세상! 1층 홀에 자리한 뮤지엄 샵에서 다양한 정품 테디베어는 물론 티셔츠, 가방, 문구 등 테디베어뮤지엄의 감동을 그대로 담아갈 수 있습니다." },
    { id: 8, title: "테디베어 카페", des: "향기로운 테디베어 커피와 함께 넓은 가든 뷰를 즐겨보세요 유니크한 테디베어 상품들을 만나 볼 수 있습니다." },
    { id: 9, title: "수유실", des: "영유아를 동반하신 관람객분들을 위한 아늑하고 편안한 수유실이 마련되어 있습니다." },
]

const Jeju = ({ placedata }) => {
    return (
        <div className='JEJU place_section'>
            <h3>{placedata[0].area}</h3>
            <div className="des">{placedata[0].descript}</div>
            <div className="grid_container">
                {
                    JEJUMSM.map((it, idx) => {
                        return (
                            <figure key={it.id}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/jeju0' + it.id + '.png'} alt="" />
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

export default Jeju;
