import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Study Materials",
  "Quiz Portal",
  "Job Portal",
  "Contact Us",
];

function MainWebsiteNavbar(props) {
  const navigae = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="../qvCarieer.jpg"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ p: 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={require('./qvCarieer3.jpg')} style={{borderRadius:"50%", marginTop:"10px"}} alt="logo" width={70} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{ color: "#fff", fontSize: "18px" }}
              onClick={() => navigae(`/`)}
            >
              Home
            </Button>
            <Button
              sx={{ color: "#fff", fontSize: "18px" }}
              onClick={() => navigae(`/`)}
            >
              About Us
            </Button>
            <a href="#study_materials">
            <Button
              sx={{ color: "#fff", fontSize: "18px" }}
              onClick={() => navigae(`#study_materials`)}
            >
              Study Materials 
            </Button>
            </a>
            <Button
              sx={{ color: "#fff", fontSize: "18px" }}
              onClick={() => navigae(`/quiz_portal`)}
            >
              Quiz Portal
            </Button>
            <a href="http://localhost:8000">
            <Button
              sx={{ color: "#fff", fontSize: "18px" }}
            >
              Job Portal
            </Button>
            </a>
            <a href="#contact_us">
            <Button
              sx={{ color: "#fff", fontSize: "18px" }}
              onClick={() => navigae(`#contact_us`)}
            >
              Contact Us
            </Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

MainWebsiteNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainWebsiteNavbar;
