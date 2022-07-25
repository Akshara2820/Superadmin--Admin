import React from "react";

function UserDetails() {
  const saved = localStorage.getItem("userRegister");

  const initialItem = JSON.parse(saved);

  return (
    <>
      <div>
      <h1 className="underline"> User Details</h1>
        {initialItem.map((saved) => (
          <div>
            <p>
        
              {saved.name} : {saved.password}: {saved.roll}{" "}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserDetails;
