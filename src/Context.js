import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Context = React.createContext({});

function CartProvider(props) {
  
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");
  const navigate = useNavigate();
 

  // const navigate = useNavigate()

  const item1 = localStorage.getItem("userRegister");

  function RollLogin(roll, name) {
    setRoll(roll);
    console.log(roll, "logggogogog", name);

    const store = JSON.parse(item1);

    const datastore = store.filter(
      (k) => k.name === name && k.roll === roll
    )[0];
    console.log(store, "ggggg");
    console.log(datastore, "your roll****");

    if (datastore.roll ==="Superadmin") {
      if (datastore.name === name) {
        setAuth("Superadmin");
        navigate("/");
      }
    } else if (datastore.roll ==='Admin') {
      console.log("datastorename-----",name)
      if (datastore.name === name) {
        setAuth("Admin");
        navigate("/");
      }
    }
  }

  // const onLogout = () => {
  //   setAuth(false);
  //   setRoll("");
  // };

  return (
    <>
      <Context.Provider value={{ auth, roll, RollLogin}}>
        {props.children}
      </Context.Provider>
    </>
  );
}

const useAuth = (props) => {
  const val = useContext(Context);
  return val;
};
export default CartProvider;
export { useAuth };
