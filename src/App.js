import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashbord from "./Dashbord";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
import Layout from "./Layout";
import { useAuth } from "./Context.js";


function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const { roll} = useAuth();
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={isLoggedin ? <Layout /> : <Navigate to="/login" />}
        >
          <Route path="/dashbord" element={<Dashbord />} />

          {roll=== "Superadmin" ?<Route path="/userdetails" element={<UserDetails />} /> :null }

          

          <Route path="/userlist" element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
