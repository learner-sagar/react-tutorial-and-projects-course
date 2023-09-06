import { useState } from "react";
import data from "./data";
import People from "./People";
const App = () => {
  const [persons, setPersons] = useState(data);
  const handleClear = () => {
    setPersons([]);
  }
  return <main>
    <div className="container">
      <h3>5 birthdays today</h3>
      {
        persons.map((people) => (
          <People people={people} />
        ))
      }
      <button className="btn btn-full-width" onClick={handleClear}>Clear All</button>
    </div>
  </main>;
};
export default App;
