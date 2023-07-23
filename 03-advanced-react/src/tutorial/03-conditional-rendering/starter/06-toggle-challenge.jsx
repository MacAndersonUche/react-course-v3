import { useState } from "react";

const ToggleChallenge = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (params) => {
    setIsClicked(prev => !prev)
  }
  return (
    <>
    <button className="btn" onClick={handleClick}>Click Me</button>
    {isClicked && <p>I have been clicked</p>}
    </>
  );
};

export default ToggleChallenge;
