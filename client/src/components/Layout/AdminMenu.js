import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/AdminMenu.css"; // Import the CSS file

const AdminMenu = () => {
  return (
    <div className="admin-menu-container">
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="menu-item"
            activeClassName="active"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="menu-item"
            activeClassName="active"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="menu-item"
            activeClassName="active"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="menu-item"
            activeClassName="active"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="menu-item"
            activeClassName="active"
          >
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
