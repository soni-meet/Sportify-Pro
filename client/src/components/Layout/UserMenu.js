import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/AdminMenu.css";
const UserMenu = () => {
  return (
    <div className="admin-menu-container">
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            //className="list-group-item list-group-item-action"
            className="menu-item"
            activeClassName="active"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            //className="list-group-item list-group-item-action"
            className="menu-item"
            activeClassName="active"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
