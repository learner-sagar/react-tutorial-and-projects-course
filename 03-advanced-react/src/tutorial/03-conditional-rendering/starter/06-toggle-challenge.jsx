import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <div className="alert alert-danger">Hello world</div>}
    </div>
  );
};

export default ToggleChallenge;
