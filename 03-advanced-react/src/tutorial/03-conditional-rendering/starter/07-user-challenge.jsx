import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (params) => {
    setUser({ name: "Mac" });
  };
  const handleLogOut = (params) => {
    setUser(null);
  };
  return (
    <div>
      {!user ? (
        <button className="btn" onClick={handleLogin}>
         Please Login
        </button>
      ) : (
        <div>
          <p>Hello there, {user.name} is logged in</p>
          <button className="btn" onClick={handleLogOut}>
          LogOut
        </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
