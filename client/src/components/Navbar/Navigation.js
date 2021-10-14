import React, { useState } from 'react'
import './style.css'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap'
export default function Navigation( props ) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen) 

    return (
        <Navbar id="navbar" expand="md">
            <NavbarBrand className="item" href="/"> JobPortal </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav id="navitem-content" className="mr-auto" navbar>
                    <NavItem >
                        <NavLink className="item" href="#abt-us">About Us </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink href="#srv" className="item" >Service</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className="item" href="#contact-id">Contact US</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className="item" href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className="item" href="/register">Register</NavLink>
                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    );
}
