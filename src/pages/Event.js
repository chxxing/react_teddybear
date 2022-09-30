import React from 'react'

const Event = ({ content }) => {
    return (
        <section className='Event sc'>
            <figure key={content[2].id} className="banner">
                <div className="box">
                    <h2>{content[2].title}</h2>
                    <div className="des">{content[2].des}</div>
                </div>
            </figure>
            <div className="inner">
                <h3>Event</h3>
            </div>
        </section >
    )
}

export default Event;