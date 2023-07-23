import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  
  const remove = (id) => {
    const itemToRemove = people.filter(item => item.id !== id)

    setPeople(itemToRemove)
  }

  const clear = () => {
    setPeople([])
  }
  const listItems = people.map((item) => (
    <>
    <li key={item.id}>{item.name}</li>
    <button onClick={() => {remove(item.id)} }>Remove</button>
    </>
    
  ))


  return (
      <div>
        <ul>
        {listItems}
        </ul>

        <button className="btn" onClick={clear}>Clear</button>
      
      </div>


  );
};

export default UseStateArray;
