import React, { useEffect, useState } from "react";
import MainWebsiteNavbar from "../MainWebsiteNavbar/MainWebsiteNavbar";
import { Typography } from "@mui/material";
import PrintGuides from "../../../templates/PrintTableMain/PrintTableMain";
import "./Guides.css";
import { getAllStudyMaterials, getBooksBySem } from "../../../apis/admin/adminApi";
import { useLocation, useParams } from "react-router-dom";

const Guides = () => {

  const params = useParams();

  const semester = params.semester;
  console.log(params,semester)

  const [guides, setGuides] = useState([]);

  useEffect(() => {
    getBooksBySem(semester).then((response) => {
      if (response.error) {
        console.error(response.error);
      }
      setGuides(response);
      console.log(response, guides);
    });
  }, []);

  console.log(guides);

  return (
    <div>
      <MainWebsiteNavbar />
      <div>
        <Typography variant="h2">Books / Guides for B.Tech {semester} Year</Typography>
      </div>
      <div className="guides">
        <PrintGuides guides = {guides}/>
        </div>
    </div>
  );
};

export default Guides;
