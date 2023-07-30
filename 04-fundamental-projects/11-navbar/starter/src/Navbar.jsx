import { useEffect, useRef, useState } from "react";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [height, setHeight] = useState(0);
  const anotherRef = useRef();

  const handleClick = () => {
    setShowLinks((prev) => !prev);
  };
  useEffect(() => {
    if (!anotherRef?.current?.getBoundingClientRect()?.height) {
      return;
    }

    setHeight(Math.floor(anotherRef?.current?.getBoundingClientRect()?.height));
  }, [anotherRef?.current?.getBoundingClientRect()?.height]);

  return (
    <div style={{ height }}>
      {social.map((item) => (
        <a id={item.id}>{item.icon}</a>
      ))}
      {links.map((link) => (
        <a
          href={link.url}
          id={link.id}
          className={!showLinks ? "link" : "shownLinks"}
          ref={anotherRef}
        >
          {link.text}
        </a>
      ))}

      <button className="btn" onClick={handleClick}>
        Show Links
      </button>
    </div>
  );
};

export default Navbar;
