
import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../../styles/AdminDashboard.css"; 

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <AdminMenu />
          </div>
          <div className="col-md-6">
            <div className="card admin-card">
              <h2 className="admin-heading">Admin Dashboard</h2>
              <div className="admin-info">
                <p>
                  <span className="info-label">Admin Name:</span> {auth?.user?.name}
                </p>
                <p>
                  <span className="info-label">Admin Email:</span> {auth?.user?.email}
                </p>
                <p>
                  <span className="info-label">Admin Contact:</span> {auth?.user?.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

