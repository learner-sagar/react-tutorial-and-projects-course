import { useState } from "react";
import data from "./data";
const App = () => {
  const [persons, setPersons] = useState(data);
  const handleClear = () => {
    setPersons([]);
  }
  return <main>
    <div className="container">
      <h3>5 birthdays today</h3>
      {
        persons.map(({id, name, age, image}) => (
          <article className="person" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                </div>
          </article>
        ))
      }
      <button className="btn btn-full-width" onClick={handleClear}>Clear All</button>
    </div>
  </main>;
};
export default App;
