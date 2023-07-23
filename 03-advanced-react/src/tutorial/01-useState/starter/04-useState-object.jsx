import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Mac",
    age: 25,
    hobby: "Coding",
    show: "John"
  })

  const changeToJohn = () => {
    setPerson({
      name: "John",
      age: 21,
      hobby: "Clubbing"
    })
  }
  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h2>Enjoys: {person.hobby}</h2>
      <button className='btn' onClick={changeToJohn}>Show {}</button>
    </div>
);
};

export default UseStateObject;
