import React, { useEffect, useState } from "react";
import NavbarUser from "../../../templates/UsersNavbar/NavBarAdmin/NavbarUser/NavbarUser";
import { viewCompletedTest } from "../../../apis/admin/adminApi";
import { PrintCompletedTest } from "../../../templates/PrintTableUser/PrintTableUser";
import { Box } from "@mui/material";
import { isAuthenticated } from "../../../auth";

const CompletedTest = () => {
  const [tests, setTests] = useState([]);

  const {token} = isAuthenticated();

  useEffect(() => {
    viewCompletedTest(token, JSON.parse(localStorage.getItem("jwt")).user._id).then(data => {
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
      <h2 style={{marginTop:"20px"}}>Completed Tests</h2>
      <Box margin={'30px 40px'} display={'flex'} gap={'50px 50px'} flexWrap={'wrap'} justifyContent={'center'} >
      <PrintCompletedTest tests={tests} />
      </Box>
    </div>
  );
};

export default CompletedTest;
