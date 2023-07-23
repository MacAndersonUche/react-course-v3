import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isRefetching, setReFetching] = useState(false)

  const handleRefetch = () => {
    setReFetching(prev => !prev)
  }

  async function fetching() {
    try {
      const res = await fetch(url)
      setIsLoading(true)
      if(res.ok) {
        const data = await res.json()
        setTours(data)
        setIsLoading(false)
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetching()
  }, [isRefetching])
  return (
    <div className="tours">
      {!isLoading && tours && <Tours tours={tours} setTours={setTours}/>}
      {isLoading && <Loading/>}
      <button onClick={handleRefetch}>Refetch</button>
    </div>
  );
};
export default App;
