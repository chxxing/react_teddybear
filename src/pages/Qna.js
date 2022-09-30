import React from 'react'

const Qna = ({ content }) => {
    return (
        <section className='Qna sc'>
            <figure key={content[4].id} className="banner">
                <div className="box">
                    <h2>{content[4].title}</h2>
                    <div className="des">{content[4].des}</div>
                </div>
            </figure>
            <div className="inner">
                <h3>QNA</h3>
            </div>
        </section >
    )
}

export default Qna