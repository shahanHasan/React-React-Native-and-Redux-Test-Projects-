import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("default User");

  useEffect(() => {
    // fetch javascript default api call function
    fetch(url)
      .then((resp) => {
        // if (resp.status >= 200 && resp.status <= 299) {
        //   return resp.json();
        // } else {
        //   setisLoading(false);
        //   setisError(true);
        //   throw new Error(resp.statusText);
        return resp.json();
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setisLoading(false);
      })
      .catch((error) => {
        setisError(true);
      });
  }, []);

  if (isLoading) {
    return <h1>...loading</h1>;
  }
  if (isError) {
    return <h1>...Error Loading</h1>;
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
