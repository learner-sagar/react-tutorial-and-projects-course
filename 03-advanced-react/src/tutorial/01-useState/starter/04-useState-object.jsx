import { useState } from 'react';

const UseStateObject = () => {
const [person, setPerson] = useState({name: "peter", age: 24, hobby: "Read Books"});
const changePerson = () =>{
  setPerson({
    name: "John", age: 28, hobby: "Scream At The Computer"
  });
}
  return <div>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>Enjoys To: {person.hobby}</h4>
    <button className='btn' onClick={changePerson}>Show John</button>
  </div>;
};

export default UseStateObject;
