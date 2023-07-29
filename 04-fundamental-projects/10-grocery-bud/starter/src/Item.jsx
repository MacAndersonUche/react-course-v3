import { useState } from "react";

const Item = ({ item, handleDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name=""
        id=""
        checked={isChecked}
        onChange={(e) => setIsChecked((prev) => !prev)}
      />
      <p
        style={
          !isChecked
            ? { textDecoration: "none" }
            : { textDecoration: "line-through" }
        }
      >
        {item.item}
      </p>
      <button className="remove-btn" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default Item;
