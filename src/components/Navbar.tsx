import { Nav, Navbar as NavbarBs, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.svg";
const Navbar = () => {
  return (
    <NavbarBs>
      <Container>
        <Nav>
          <NavLink to='/'>
            <img src={logo} alt='' />
          </NavLink>
          <NavLink to='/'>HOME</NavLink>

          <NavLink to='/shop'>SHOP</NavLink>

          <NavLink to='lookbood'>LOOKBOOK</NavLink>
          <NavLink to='features'>FEATURES</NavLink>
          <NavLink to='pages'>PAGES</NavLink>
          <NavLink to='blog'>BLOG</NavLink>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
