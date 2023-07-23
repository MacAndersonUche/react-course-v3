import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./Questions";
import { useEffect } from "react";

const App = () => {
  const [quest, setQuest] = useState(questions);
  const [clickedId, setClickedId] = useState(0);

  const handleShow = (id) => {
    setClickedId(id);
  };

  const handle = () => {
    const filtered = quest.map((item, idx) => {
      if(idx  === clickedId){
     
        return {
          ...item,
          show: true
        }
      }

      return {...item, show: false}
    });

    setQuest(filtered)
  };

  useEffect(() => {
    handle();
   
  }, [clickedId]);
  return (
    <div>
      <h1>Accordion</h1>
      {quest.map((item) => (
        <SingleQuestion question={item} onShow={handleShow} />
      ))}
    </div>
  );
};
export default App;
