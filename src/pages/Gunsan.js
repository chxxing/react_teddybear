
const Gunsan = ({ placedata, content }) => {
    return (
        <div className='GUNSAN place_section'>
            <h3>{placedata[2].area}</h3>
            <div className="des">{placedata[2].descript}</div>
            <div className="grid_container">
                {
                    content.map((it, idx) => {
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
