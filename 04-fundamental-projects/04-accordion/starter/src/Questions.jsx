import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, setActiveId }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </section>
  );
};

export default Questions;
