import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AddCategory from "../../pages/AdminDashboard/AddCategory/AddCategory";
import { deleteCategoryById, getCategoryById } from "../../apis/admin/adminApi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import UpgradeSharpIcon from "@mui/icons-material/UpgradeSharp";
import { useNavigate } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const PrintGuides = ({guides}) => {
  const navigate = useNavigate();
  // console.log(props);
  return (
    <>
      {guides.map((guide) => {
        const { _id, title, description, content_type, semester, link } = guide;

        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://new-img.patrika.com/upload/2019/06/11/examguide_4694715_835x547-m.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>window.open(`${link}`, "_blank")}>Download</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default PrintGuides;
