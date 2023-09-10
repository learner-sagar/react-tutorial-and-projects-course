import { useState } from "react";
import Values from "values.js";
import ColorList from "./ColorList";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColors = (color) => {
    try {
      const newColors = new Values(color).all(10);
      console.log(addColors);
      setColors(newColors);
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <main>
      <Form addColors={addColors} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
