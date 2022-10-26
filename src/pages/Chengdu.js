const Chengdu = ({ placedata, content }) => {
    return (
        <div className='CHENGDU place_section'>
            <h3>{placedata[3].area}</h3>
            <div className="des">{placedata[3].descript}</div>
            <div className="grid_container">
                {
                    content.map((it, idx) => {
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
