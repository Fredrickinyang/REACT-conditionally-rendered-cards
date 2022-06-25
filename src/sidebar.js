import React from "react";
import { RenderContext } from "./App";

const SideBar = () => {
  const [male, female, allUsers] = React.useContext(RenderContext);

  return (
    <div className="sidebar-container">
      <input type="checkbox" name="" id="side-menu-switch" />
      <div className="side-menu">
        <nav>
          <p onClick={allUsers}>
            <i className="fas fa-gavel"></i>All Cards
          </p>
          <p onClick={male}>
            <i className="fas fa-gavel"></i>Male
          </p>
          <p onClick={female}>
            <i className="fas fa-gavel"></i>Female
          </p>
        </nav>
        <label for="side-menu-switch">
          <i className="fas fa-angle-left"></i>
        </label>
      </div>
    </div>
  );
};

export default SideBar;
