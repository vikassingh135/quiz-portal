import React, { useEffect, useState } from "react";
import NavbarUser from "../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser";
import { viewCompletedTest } from "../../../apis/admin/adminApi";
import { PrintCompletedTest } from "../../../templates/PrintTableUser/PrintTableUser";
import { Box } from "@mui/material";

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
      <Box margin={'30px 40px'} display={'flex'} gap={'30px'}>
      <PrintCompletedTest tests={tests} />
      </Box>
    </div>
  );
};

export default CompletedTest;
