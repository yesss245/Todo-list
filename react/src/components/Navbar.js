import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div ><h3 className="m-5 p-3 text-center" style={{backgroundColor:"#000",}}>
      <span style={{color:"yellow"}}>ToDo</span>
      <span style={{color:"white"}}>-</span>
      <span style={{color:"red"}}>List</span></h3>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <Link to="/" className="navbar-brand">
            Todo List
          </Link> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="Home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Show Data
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  Add Todo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="Home" element={<Home />}></Route>
        </Routes>
      </div>
    </div>  
  );
};
export const Home = () => {
  return  <div
            style={{fontSize:"2rem",color:"green",fontWeight:"700", border:"2px solid green",borderRadius:"10px"}} 
            className="d-flex justify-content-center m-5 msg p-3">
              Welcome To The Todo-List Application
          </div>;
};

export default Navbar;
