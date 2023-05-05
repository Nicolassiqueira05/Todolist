import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Templates/Login/Login";
import Register from "./Components/Templates/Register/Register"
import Main from "./Components/Templates/Main/Main"

function App() {
  return(
    <>
    <Routes>
      <Route path="/" Component={Login}/>
      <Route path="/register" Component={Register}/>  
      <Route path ="/main" Component={Main}/>
    </Routes>
    </>
  )
}
export default App;
