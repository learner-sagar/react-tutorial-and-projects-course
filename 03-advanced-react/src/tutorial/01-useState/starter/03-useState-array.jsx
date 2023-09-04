import { useState } from "react";
import {data} from "../../../data"
const UseStateArray = () => {
  const [items, setItems] = useState(data);
  const handleRemove = (id) =>{
    setItems(items.filter(item => item.id != id));
  }
  const handleClear = () => {
    setItems([]);
  }
  return (
    <div>
      <h1>State Example</h1> 
      <div>
      {items.map((item) => (
        <>
          <h3 key={item.id} className="item">{item.name}</h3>
          <button className="btn" onClick={() => handleRemove(item.id)}>remove</button>
        </>
      ))}
      </div>
      <button className="btn" style={{marginTop: "30px"}} onClick={handleClear}>clear all</button>
    </div>
  );
};

export default UseStateArray;
