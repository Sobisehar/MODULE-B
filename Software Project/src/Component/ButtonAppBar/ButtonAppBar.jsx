import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 240;

export default function ButtonAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState({});
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const handleFileClick = (folder, file) => {
    navigate(`/Dashboard/${folder}/${file}`);
    setMobileOpen(false);
  };

  const folders = {
    Students: ["StudentsRegistration", "StudentsList"],
    Teachers: ["TeachersRegistration", "TeachersList"],
    Subjects: ["SubjectRegistration", "SubjectList"],
    School: {
      Students: ["StudentsRegistration"],
      Teachers: ["TeachersRegistration"],
    },
    Syllabus: ["SyllabusForm", "SyllabusList"],
    Class: ["ClassForm", "ClassList"],
    Admission: ["AdmissionForm", "AdmissionList"],
    Fees: ["FeeStructure", "FeeVoucher"],
    Exams: ["ExamSchedule", "ExamList"],
  };

  const renderFolders = (items, parentPath = "") => {
    return Object.keys(items).map((key, index) => {
      const value = items[key];

      if (Array.isArray(value)) {
        return (
          <React.Fragment key={key}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick(parentPath + key)}>
                <ListItemText primary={key} />
                {open[parentPath + key] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open[parentPath + key]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {value.map((file) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={file}
                    onClick={() => handleFileClick(key, file)}>
                    <ListItemText primary={file} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        );
      } else if (typeof value === "object") {
        return (
          <React.Fragment key={key}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick(parentPath + key)}>
                <ListItemText primary={key} />
                {open[parentPath + key] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open[parentPath + key]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderFolders(value, parentPath + key + "/")}
              </List>
            </Collapse>
          </React.Fragment>
        );
      }
    });
  };

  const drawer = (
    <Box
      sx={{ width: drawerWidth, color: "#FFFFFF" }}
      style={{ backgroundColor: "#19969e", height: "100%" }}
      role="presentation">
      <List>{renderFolders(folders)}</List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#21445D" }}>
        <Toolbar
          sx={{
            flexWrap: isSmallScreen ? "wrap" : "nowrap",
            display: "flex",
            alignItems: "center",
            gap: isSmallScreen ? 1 : 2, // Reduce gap on small screens
            padding: isSmallScreen ? "0 4px" : "0 16px", // Adjust padding on small screens
          }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: isSmallScreen ? 1 : 2 }} // Reduce margin on small screens
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <SchoolIcon fontSize="small" sx={{ mr: isSmallScreen ? 0.5 : 1 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "cursive",
                fontSize: isSmallScreen ? "1rem" : "1.25rem",
              }}>
              Learning Management System
            </Typography>
          </Box>

          {isSmallScreen ? (
            <IconButton color="inherit" onClick={handleLoginClick}>
              <ExitToAppIcon />
            </IconButton>
          ) : (
            <Button color="inherit" onClick={handleLoginClick}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}>
        {drawer}
      </Drawer>
    </Box>
  );
}
