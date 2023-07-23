import { useState } from "react";
import menu from "./data";
import Menu from "./Menu";
import { useEffect } from "react";
import Categories from "./Categories";

const App = () => {
  const [all, setAll] = useState(menu);
  const [categories, setCategories] = useState(null);
  const [catToFilter, setCatToFilter] = useState("");

  const getCategories = () => {
    let empt = ["All"];
    menu.forEach((el) => {
      if (!empt.includes(el.category)) {
        return empt.push(el.category);
      }
      return;
    });

    const catSet = new Set(empt);

    setCategories(catSet);
  };

  const renderFilter = () => {
    if (!catToFilter) {
      setAll(menu);

      return;
    }
    const filtered = all.filter((item) => item.category === catToFilter);

    setAll(filtered);
  };

  const handleFilter = (item) => {
    if (item !== "All") {
      setCatToFilter(item);
    }

    setAll(menu);
  };

  useEffect(() => {
    getCategories();

    renderFilter();
  }, [catToFilter]);

  return (
    <div>
      <h2>Menu Starter</h2>
      <Menu menus={all} />
      <Categories categories={categories} handleFilter={handleFilter} />
    </div>
  );
};
export default App;
