import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () =>{
    setTimeout(() => {
      setCount((prevCount) => {
        return prevCount + 1
      });
      console.log("clicked the button");
    }, 3000);
  }
  return <div>
    <h1>{count}</h1>
    <button className="btn" onClick={handleClick}>Increase</button>
  </div>;
};

export default UseStateGotcha;
