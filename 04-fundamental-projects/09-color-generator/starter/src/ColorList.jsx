import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((color, idex) => (
        <SingleColor color={color} id={nanoid()} />
      ))}
    </div>
  );
};

export default ColorList;
