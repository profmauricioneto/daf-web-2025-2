import React, { Fragment } from "react";
import User from "./User";

const UserList = () => {
  const users = [
    { name: "mauricio", age: 35 },
    { name: "joãozinho", age: 10 },
    { name: "astolfo", age: 70 },
    { name: "enzo", age: 15 }
  ];

  return (
        <div className="">
            {users.map((user, index) => (
                <User key={index} name={user.name} age={user.age} />
            ))}
        </div>
    );
};

export default UserList;