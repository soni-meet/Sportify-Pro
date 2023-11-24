import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { FiHome, FiShoppingCart, FiUser, FiList } from "react-icons/fi";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import logo from "../../images/logo.png";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  const handleHover = (e) => {
    e.target.style.borderColor = "#007bff";
    e.target.style.color = "#007bff";
  };

  const handleHoverEnd = (e) => {
    e.target.style.borderColor = "#ccc";
    e.target.style.color = "#333";
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderBottom: "2px solid #ddd",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <img
                src={logo}
                alt="Sportify Pro"
                className="logo-icon"
                style={{ height: "40px" }}
              />
            </Link>
            <div className="Search" style={{ marginLeft: "25%" }}>
              <SearchInput
                style={{
                  padding: "5px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  transition: "border-color 0.3s, color 0.3s",
                  
                }}
                // Add hover effect on search input
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverEnd}
              />
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ color: "#333", textDecoration: "none", padding: "10px", }}
                  activeStyle={{ color: "#007bff" }}
                >
                  <span className="icon" style={{ transition: "color 0.3s" }}>
                    <FiHome
                      size={25}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverEnd}
                    />
                  </span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                  style={{ color: "#333", textDecoration: "none" }}
                >
                  <span className="icon">
                    <FiList
                      size={25}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverEnd}
                    />
                  </span>
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/categories"}
                      style={{ color: "#333", textDecoration: "none" }}
                    >
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c.slug}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#333", textDecoration: "none" }}
                >
                  <span className="icon">
                    <FiUser
                      size={25}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverEnd}
                    />
                  </span>
                </NavLink>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  {!auth.user ? (
                    <>
                      <li className="nav-item">
                        <NavLink
                          to="/register"
                          className="nav-link"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/login"
                          className="nav-link"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          Login
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink
                          to={`/dashboard/${auth?.user?.role === 0 ? "user" : "admin"}`}
                          className="nav-link"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          Dashboard 
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="nav-link"
                          style={{ color: "#333", textDecoration: "none" }}
                        >
                          LogOut
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              <li className="nav-item last-item" style={{ marginRight: "70px" }}>
                <Badge count={cart?.length} showZero>
                  <NavLink
                    to="/cart"
                    className="nav-link"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <span className="last-icon">
                      <FiShoppingCart
                        size={25}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverEnd}
                      />
                    </span>
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
