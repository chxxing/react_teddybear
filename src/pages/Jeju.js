import React from 'react';

const Jeju = ({ placedata, content }) => {
    return (
        <div className='JEJU place_section'>
            <h3>{placedata[0].area}</h3>
            <div className="des">{placedata[0].descript}</div>
            <div className="grid_container">
                {
                    content.map((it, idx) => {
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
