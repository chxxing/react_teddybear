import { useState } from "react"

const Qna = ({ content, board }) => {
    const [tab, setTab] = useState(0);
    const TabHandler = (idx) => {
        setTab(idx);
    };
    return (
        <section className='Qna sc'>
            <figure key={content[3].id} className="banner">
                <div className="box">
                    <h2>{content[3].title}</h2>
                    <div className="des">{content[3].des}</div>
                </div>
            </figure>
            <div className="qna_page">
                <div className="tab_menu">
                    <ul className="inner">
                        {
                            board.map((it, idx) => {
                                return (

                                    <li
                                        className={tab === idx ? "on" : ""}
                                        onClick={() => TabHandler(idx)} key={it.id}>
                                        {it.cate}
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
                <div className="board inner">
                    <h3>{board[tab].cate}</h3>
                    <table className="qna_table">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                board[tab].board.map((it, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{it.id}</td>
                                            <td>{it.question}</td>
                                            <td>{it.name}</td>
                                            <td>{it.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    )
}

export default Qna