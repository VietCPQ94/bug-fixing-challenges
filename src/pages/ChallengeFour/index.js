import React, { useState } from "react";

/**
 *  -	Issue: The user’s age does not change upon clicking the [UP] button.
 *
 *  -	Rule:
 *    •	Keep the interface structure intact
 *    •	Only use React techniques.
 *    •	You do not edit anything in ChallengeFour Component
 *    •	You do not remove React.memo in User Component
 *
 *  -	Expected result: The user's age is incremented upon clicking the [UP] button.
 */
export default function ChallengeFour() {
  const [user, setUser] = useState({
    info: {
      name: "John",
      age: 20,
    },
  });

  const handleUp = () => {
    let newInfo = { ...user };
    newInfo.info.age += 1;

    setUser(newInfo);
  };
  return (
    <>
      <h1>Challenge 4</h1>
      <button onClick={handleUp}>Up</button>
      <User userInfo={user.info} />
    </>
  );
}

const User = React.memo(({ userInfo }) => {
  return (
    <>
      <h2>User Name : {userInfo.name}</h2>
      <h2>
        User Age : <span>{userInfo.age}</span>
      </h2>
    </>
  );
});
