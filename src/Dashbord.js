import React from "react";
import { useAuth } from "./Context";


function Dashbord() {
const auth = useAuth()
console.log(auth,"jhffbd")


// console.log(role,"ttttttt")
  return (
    <div className="mt-5">
      <h3> Dashbord  </h3>

      
    </div>
  );
}
export default Dashbord;
