import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearHandler = () => {
    setPeople([])
  }
  return (
    <div className="container">
      <h3>{data.length} Birthdays Today</h3>
      <div>
        {people.map((item) => (
          <div>
            <img src={item.image} height={100} width={100} />{" "}
            <div>
              <h4>{item.name}</h4>
              <p>{item.age} years</p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn" width={"100%"} onClick={clearHandler}>
        Clear
      </button>
    </div>
  );
};
export default App;
