import React from "react";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  const [user, token] = useAuth();
 
  return (
    <div className="container">
      <h1>Welcome to BookNook, {user.username}!</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Please use the navagation bar above to Search or go to your Favorites</h2>
    </div>
  );
};

export default HomePage;
