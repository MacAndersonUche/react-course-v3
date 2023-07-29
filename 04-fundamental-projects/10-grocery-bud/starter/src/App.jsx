import { useState } from "react";
import MainForm from "./MainForm";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const App = () => {
  const initialItems = JSON.parse(localStorage.getItem("groceries")) || [];
  const [items, setItems] = useState(initialItems);
  const [rendered, setRendered] = useState([]);

  const handleDelete = (id) => {
    const removed = items.filter((item) => item.id !== id);

    setItems(removed);
    toast.success(`Item number ${id} has been deleted`);
  };

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(items));
  }, [items]);

  return (
    <div className="section-center">
      <MainForm setItems={setItems} />
      <Items items={items} handleDelete={handleDelete} />
      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
};

export default App;
