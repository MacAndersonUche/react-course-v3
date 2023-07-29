import Item from "./Item";

const Items = ({ items, handleDelete }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <Item item={item} handleDelete={handleDelete} key={item.id} />
      ))}
    </div>
  );
};

export default Items;
