import menu from "./data";

const Categories = ({ categories, handleFilter }) => {

  return (
    <div className="btn-container">
      {categories &&
        Array.from(categories).map((item, idex) => (
          <button id={idex} className="btn" onClick={() => handleFilter(item)}>
            {item}
          </button>
        ))}
    </div>
  );
};

export default Categories;
