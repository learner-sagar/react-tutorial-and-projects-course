import { useState } from "react";
import data from "./data";
import Questions from "./Questions";
const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </main>
  );
};
export default App;
