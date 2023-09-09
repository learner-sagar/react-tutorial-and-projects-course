import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ id, title, info, activeId, setActiveId }) => {
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            activeId == id ? setActiveId(null) : setActiveId(id);
          }}
        >
          {activeId == id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {activeId == id && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
