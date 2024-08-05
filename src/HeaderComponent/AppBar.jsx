import * as React from "react";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const drawerWidth = 260;

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Courses" },
  { label: "Contact", path: "/contact" },
];

const courseOptions = [
  { label: "DevSecOps", path: "/course/devsecops" },
  { label: "Full Stack Development", path: "/course/full-stack-development" },
  { label: "HR Training", path: "/course/hr-training" },
];

const signUpButtonStyle = {
  border: "2px solid #fff",
  borderRadius: "5px",
  height: "40px",
  width: "100px",
  color: "black",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#4B0082",
  },
  fontSize: "16px",
  marginTop: "10%",
  marginRight: "10px",
  fontWeight: 600,
};

const courseMenuItemStyle = {
  fontWeight: "bold",
  padding: "10px 30px",
  color: "black",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    color: "#4B0082",
  },
};
const mobileCourseItemStyle = {
  textAlign: "center",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    color: "#4B0082",
  },
  pl: 4, // Adjust padding as needed
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCoursesMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCoursesMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileCoursesToggle = () => {
    setMobileCoursesOpen((prevOpen) => !prevOpen);
  };

  const handleDrawerItemClick = (item) => {
    if (item.label !== "Courses") {
      setMobileOpen(false);
    }
  };

  const careersButtonStyle = {
    backgroundColor: "#004A7F",
    borderRadius: "10px",
    border: "none",
    color: "#FFFFFF",
    cursor: "pointer",
    height: isMobile ? "10%" : "0",
    width: isMobile ? "60%" : "80%",
    fontFamily: "Arial",
    fontSize: isMobile ? "16px" : "13px",
    padding: "8px 30px",
    marginRight: isMobile ? "0%" : "7 0px",
    margginBottom: isMobile ? "0" : "30px",
    marginTop: isMobile ? "10px" : "0px",
    textAlign: "center",
    textDecoration: "none",

    animation: "glowing 1500ms infinite",
    "@keyframes glowing": {
      "0%": { backgroundColor: "#FF4F00", boxShadow: "0 0 3px #85B09A" },
      "50%": { backgroundColor: "#C46210", boxShadow: "0 0 40px #85B09A" },
      "100%": { backgroundColor: "#E09540", boxShadow: "0 0 3px #85B09A" },
    },
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Kymera
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>
          item.label === "Courses" ? (
            <React.Fragment key={item.label}>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={handleMobileCoursesToggle}
              >
                <ListItemText
                  primary={item.label}
                  sx={{ fontWeight: "bold", fontSize: "18px" }}
                />
                <ExpandMoreIcon />
              </ListItemButton>
              <Collapse in={mobileCoursesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {courseOptions.map((course) => (
                    <ListItemButton
                      key={course.label}
                      component={Link}
                      to={course.path}
                      sx={{ textAlign: "center", pl: 4 }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <ListItemText
                        primary={course.label}
                        sx={{ fontWeight: "bold", fontSize: "16px" }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{ textAlign: "center" }}
                onClick={() => handleDrawerItemClick(item)}
              >
                <ListItemText
                  primary={item.label}
                  sx={{ fontWeight: "bold", fontSize: "18px" }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <Link to="/career">
        <Button
          type="submit"
          sx={careersButtonStyle}
          onClick={() => setMobileOpen(false)}
        >
          Careers
        </Button>
      </Link>
      <Button sx={signUpButtonStyle}>Sign Up</Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", boxShadow: "none", height: "0.9in" }}
      >
        <Toolbar sx={{ py: "30px" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {isMobile && (
            <Link to="/">
              <img
                src="/Images/HomePage/logo.jpeg"
                alt="TechJobs Logo"
                style={{ height: "60px", width: "auto", marginLeft: "40px" }}
              />
            </Link>
          )}
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "center",
              marginLeft: "-80px", // Adjust the value as per your requirement
            }}
          >
            <Link to="/">
              <img
                src="/Images/HomePage/logo.jpeg"
                alt="TechJobs Logo"
                style={{ height: "70px", width: "auto" }}
              />
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) =>
              item.label === "Courses" ? (
                <Button
                  key={item.label}
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    marginRight: index < navItems.length - 1 ? 4 : 12,
                  }}
                  aria-haspopup="true"
                  aria-controls="courses-menu"
                  onMouseEnter={handleCoursesMenuOpen}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    marginRight: index < navItems.length - 1 ? 6 : 16,
                  }}
                >
                  {item.label}
                </Button>
              )
            )}
          </Box>
          {isMobile ? null : (
            <Link to="/careers">
              <Button type="submit" sx={careersButtonStyle}>
                Careers
              </Button>
            </Link>
          )}
          <Menu
            id="courses-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCoursesMenuClose}
            MenuListProps={{ onMouseLeave: handleCoursesMenuClose }}
            sx={{ "& .MuiPaper-root": { marginTop: "10px" } }}
          >
            {courseOptions.map((option) => (
              <MenuItem
                key={option.label}
                component={Link}
                to={option.path}
                onClick={handleCoursesMenuClose}
                sx={courseMenuItemStyle}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
          {isMobile ? null : (
            <Button
              color="inherit"
              sx={{
                border: "2px solid #fff",
                borderRadius: "5px",
                height: "40px",
                width: "100px",
                color: "black",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#4B0082",
                },
                marginRight: "50px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Sign Up
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <nav>
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
      </nav>
      <Toolbar />
    </Box>
  );
}

export default DrawerAppBar;
