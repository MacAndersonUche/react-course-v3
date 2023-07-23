import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        setIsLoading(true);

        if (res.ok) {
          const data = await res.json();
          setUser(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <h2>Fetch Github Users</h2>
      {isLoading && <p>Loading....</p>}
       <ul className="users">
        <li key={user.id}>
          <img src={user.avatar_url} />
          <h4>{user.login}</h4>
          <a href={user.html_url}>view profile</a>
        </li>
      </ul>
    </div>
  );
};
export default MultipleReturnsFetchData;
