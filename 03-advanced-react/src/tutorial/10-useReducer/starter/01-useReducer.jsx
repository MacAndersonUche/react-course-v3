import React from "react";
import { useReducer } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return { ...state, people: [] };
    case "RESET":
      return { ...state, people: data };
    case "REMOVE_ITEM":
      let newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, people: newPeople };
    default:
      throw new Error(`No Matching ${action.type} - action type`);
  }
};
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);

    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearList = () => {
    // setPeople([])

    dispatch({ type: "CLEAR" });
  };
  const resetList = () => {
    // setPeople(data)

    dispatch({ type: "RESET" });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length !== 0 && (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
      {state.people.length === 0 && (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
