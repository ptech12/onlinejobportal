import React, { useState } from 'react'
import './style.css'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarText, NavbarToggler, Collapse } from 'reactstrap'
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen) 

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"> JobPortal </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem >
                        <NavLink href="#abt-us">About Us </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink href="#srv">Service</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink href="#contact-id">Contact US</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
