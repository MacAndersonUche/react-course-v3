import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState("mac")
  const [isClicked, setIsClicked] = useState(false)
  return <h2>{text || <p>hey</p>}</h2>;
};
export default ShortCircuitOverview;
