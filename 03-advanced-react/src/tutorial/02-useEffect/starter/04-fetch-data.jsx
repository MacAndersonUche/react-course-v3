import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch(url)).json()
        setUsers(res);


    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Fetch Github Users</h2>
      <ul className="users">
      {users.map(user => (
       
       <li key={user.id}>
          <img src={user.avatar_url}/>
          <h4>{user.login}</h4>
          <a href={user.html_url}>view profile</a>
       </li>

        
      ))}
      </ul>

    </div>
  );
};
export default FetchData;
