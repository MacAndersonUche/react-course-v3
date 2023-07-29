import MainForm from "./Form";
import ColorList from "./ColorList";
import { useEffect, useState } from "react";
import Values from "values.js";

import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");
  // toast.error("error message");
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const val = new Values(color).all().map((item) => {
        return {
          weight: item.weight,
          hex: item.hex,
        };
      });

      setColors(val);
    } catch (error) {
      toast.error("Invalid Number");
    }
  };

  useEffect(() => {
    // if (color.length === 0) {
    //   toast.message("empty string");
    // }
  }, [color]);
  return (
    <div className="container">
      <h2>Color Generator Starter</h2>
      <MainForm setColor={setColor} color={color} handleSubmit={handleSubmit} />
      <ColorList colors={colors} />
      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
};
export default App;
