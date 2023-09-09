import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("component mounted");
  }, []);
  return (
    <div className="alert alert-success">
      <h1>Hello World</h1>
    </div>
  );
};

export default CleanupFunction;
