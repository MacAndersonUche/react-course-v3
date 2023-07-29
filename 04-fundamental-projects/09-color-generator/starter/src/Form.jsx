import { useState } from "react";

const MainForm = ({ setColor, handleSubmit, color }) => {
  return (
    <form onSubmit={handleSubmit} className="color-form">
      <input
        type="color"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        name="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button className="btn">Submit</button>
    </form>
  );
};

export default MainForm;
