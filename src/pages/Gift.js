import React from 'react'

const Gift = ({ content }) => {
    return (
        <section className='Gift sc'>
            <figure key={content[3].id} className="banner">
                <div className="box">
                    <h2>{content[3].title}</h2>
                    <div className="des">{content[3].des}</div>
                </div>
            </figure>
            <div className="inner">
                <h3>Gift</h3>
            </div>
        </section >
    )
}

export default Gift;