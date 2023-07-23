import { useEffect, useState } from "react";

const Second = () => {
  useEffect(() => {
    console.log("Running Once");
  }, [])
  return <h1>I am Second</h1>
}
const CleanupFunction = () => {
  const [isClicked, setIsClicked] = useState(false)
  return !isClicked ? <button className="btn"onClick={() => setIsClicked(true)}>Click to show</button> : <Second/>;
};

export default CleanupFunction;
