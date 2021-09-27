import React, { useState } from 'react'
import './style.css'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarText, NavbarToggler, Collapse } from 'reactstrap'
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen) 

    return (
        <Navbar color="dark" dark expand="md"></Navbar>
    );
}
