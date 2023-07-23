import { useState } from "react"

const SingleQuestion = ({question, onShow}) => {

    return (
        <div className="question">
            <div className="header">{question.title}</div>
            <button className="question-btn" onClick={() => onShow(question?.id)}>Show Info</button>
            {question?.show && <p>{question?.info}</p>}
        </div>
    )
}


export default SingleQuestion