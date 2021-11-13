import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import "../App.css";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Job Portal
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Navbar dark expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav id="navitem-content" className="mr-auto" navbar>
                    <NavItem class="nav-item">
                      <NavLink
                        className="item"
                        onClick={() => handleClick("/home")}
                        href="/home"
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/addjob" className="item">
                        Add Jobs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="item" href="/myjob">
                        My Jobs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="item" href="/employees">
                        My Employees
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="item" href="/profile">
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="item" href="/logout">
                        Logout
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </>
          ) : (
            <>
              <Navbar dark expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav id="navitem-content" className="mr-auto" navbar>
                    <NavItem class="nav-item">
                      <NavLink
                        className="item"
                        onClick={() => handleClick("/home")}
                        href="/home"
                      >
                        Home{" "}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/applications" className="item">
                        Application
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="item" href="/profile">
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="item" href="/logout">
                        Logout
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </>
          )
        ) : (
          <>
            <Navbar dark expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav id="navitem-content" className="mr-auto" navbar>                  
                    <NavItem>
                      <NavLink className="item" href="/login">
                        Login
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="item" href="/signup">
                        Sign Up
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
/*
<AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Job Portal
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
    */