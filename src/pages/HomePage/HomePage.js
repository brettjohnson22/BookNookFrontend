import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
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
