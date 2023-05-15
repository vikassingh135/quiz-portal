import React, { useEffect, useState } from "react";
import NavbarUser from "../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser";
import { viewCompletedTest } from "../../../apis/admin/adminApi";
import { PrintCompletedTest } from "../../../templates/PrintTableUser/PrintTableUser";

const CompletedTest = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    viewCompletedTest(JSON.parse(localStorage.getItem("jwt")).user._id).then(data => {
        if(data.error) {
            console.error(data.error);
        } else {
            console.log(data);
            setTests(data)
        }
        console.log(data);
    })
  }, []);


  console.log(tests);

  return (
    <div>
      <NavbarUser />
      <PrintCompletedTest tests={tests} />
    </div>
  );
};

export default CompletedTest;
