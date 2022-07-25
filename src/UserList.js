import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";

function UserList() {
  const saved = localStorage.getItem("userRegister");

  const initialItem = JSON.parse(saved);
  return (
    <>
      <div>
        <h1 className="underline mt-2"> User List</h1>

        {initialItem.map((saved) => (
          <div>
            <p> {saved.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;
