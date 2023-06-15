import { Nav, Navbar as NavbarBs, Button, Container } from "react-bootstrap";
import { BsHeart, BsCartPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import logo from "../assets/LOGO.svg";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <NavbarBs>
      <Container>
        <Nav className='nav d-flex align-items-center justify-content-between w-100'>
          <div className='nav__logo'>
            <NavLink to='/'>
              <img src={logo} alt='logo' width='164' height='42' />
            </NavLink>
          </div>
          <div className='nav__list d-flex align-items-center'>
            <NavLink className='text-decoration-none nav__link' to='/'>
              HOME
            </NavLink>

            <NavLink className='text-decoration-none nav__link' to='/shop'>
              SHOP
            </NavLink>

            <NavLink className='text-decoration-none nav__link' to='lookbood'>
              LOOKBOOK
            </NavLink>
            <NavLink className='text-decoration-none nav__link' to='features'>
              FEATURES
            </NavLink>
            <NavLink className='text-decoration-none nav__link' to='pages'>
              PAGES
            </NavLink>
            <NavLink className='text-decoration-none nav__link' to='blog'>
              BLOG
            </NavLink>
          </div>
          <div className='nav__logos d-flex align-items-center  justify-content-center'>
            <Button className='bg-light me-3  border-0 d-block'>
              <ImSearch className='text-dark fs-3' />
            </Button>
            <Button className='bg-light me-3 border-0  d-block'>
              <BsHeart className='text-dark fs-3' />
            </Button>
            <Button className='bg-light  border-0  d-block'>
              <BsCartPlus className='text-dark fs-3' />
            </Button>
          </div>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
