import { useState } from "react";
import { nanoid } from "nanoid/non-secure";
import { toast } from "react-toastify";
const MainForm = ({ setItems }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item.length === 0) {
      toast.error("No Item Added");
      return;
    }
    setItems((prev) => [...prev, { id: nanoid(), completed: false, item }]);

    setItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        {" "}
        <input
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="form-input"
        />
        <button className="btn">Add Item</button>{" "}
      </div>
    </form>
  );
};

export default MainForm;
