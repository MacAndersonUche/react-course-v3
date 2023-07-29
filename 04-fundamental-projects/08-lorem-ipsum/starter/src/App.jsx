import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reducedText = data.slice(0, count);

    setText(reducedText);
  };

  return (
    <div className="section-center">
      <h4>Lorem Ipsum</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="num">Paragraphs</label>
        <input
          type="number"
          name=""
          id="num"
          value={count}
          min={1}
          max={8}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>
      {text.map((item, idx) => (
        <div className="lorem-text">
          <p key={idx}>{item}</p>
        </div>
      ))}
    </div>
  );
};
export default App;
