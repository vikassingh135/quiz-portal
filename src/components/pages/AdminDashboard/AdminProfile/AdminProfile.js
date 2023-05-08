import React from "react";
import { isAuthenticated } from "../../../auth";
import NavbarAdmin from "../../../templates/UsersNavbar/NavBarAdmin/NavbarAdmin/NavbarAdmin";
import "./AdminProfile.css";

const AdminProfile = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  return (
    <div>
      <NavbarAdmin />
      <div className="profile-table-div">
        <table className="profile-table">
          <caption>Profile Details</caption>
          <thead>
            <th>Information Type</th>
            <th>Values</th>
          </thead>
          <tbody>
            <tr>
              <td>Id</td>
              <td>{_id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfile;
