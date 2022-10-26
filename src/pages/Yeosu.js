import React from 'react';

const Yeosu = ({ placedata, content }) => {
    return (
        <div className='YEOSU place_section'>
            <h3>{placedata[1].area}</h3>
            <div className="des">{placedata[1].descript}</div>
            <div className="grid_container">
                {
                    content.map((it, idx) => {
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
