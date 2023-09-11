import { Nav, Navbar as NavbarBs, Button, Container } from "react-bootstrap";
import { BsHeart, BsCartPlus } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MyContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import logo from "../assets/LOGO.svg";
import { useContext } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const { togle, setTogle } = useContext(MyContext);
  const funcTogle = () => {
    return setTogle(!togle);
  };
  return (
    <NavbarBs className='navBs' sticky='top'>
      <Container>
        <Nav className='nav d-flex align-items-center justify-content-between w-100'>
          <div className='nav__logo'>
            <NavLink to='/'>
              <img src={logo} alt='logo' width='164' height='42' />
            </NavLink>
          </div>
          <div className='nav__list d-none d-xl-flex align-xl-items-xl-center'>
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
          <div className='d-flex align-items-center  justify-content-center'>
            <div className='nav__logos   align-items-center  justify-content-center'>
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
            <Button
              onClick={funcTogle}
              className='bg-white ms-3 border-0 d-block d-xl-none'>
              <RxHamburgerMenu className='text-dark fs-3 fw-bold fs-bold ' />
            </Button>
          </div>
        </Nav>
        {togle ? (
          <div className='position-absolute nav__togle  '>
            <div className='nav__list togleList  d-block '>
              <NavLink
                onClick={funcTogle}
                className='text-decoration-none togleList d-block nav__link'
                to='/'>
                HOME
              </NavLink>

              <NavLink
                onClick={funcTogle}
                className='text-decoration-none togleList d-block nav__link'
                to='/shop'>
                SHOP
              </NavLink>

              <NavLink
                onClick={funcTogle}
                className='text-decoration-none togleList d-block nav__link'
                to='lookbood'>
                LOOKBOOK
              </NavLink>
              <NavLink
                onClick={funcTogle}
                className='text-decoration-none togleList d-block nav__link'
                to='features'>
                FEATURES
              </NavLink>
              <NavLink
                onClick={funcTogle}
                className='text-decoration-none togleList d-block nav__link'
                to='pages'>
                PAGES
              </NavLink>
              <NavLink
                onClick={funcTogle}
                className='text-decoration-none togleList d-block nav__link'
                to='blog'>
                BLOG
              </NavLink>
            </div>
            <div className=' nav__mobileLogos  togleList__active  align-items-center  justify-content-center'>
              <Button
                onClick={funcTogle}
                className='bg-light me-3  border-0 d-block'>
                <ImSearch className='text-dark fs-3' />
              </Button>
              <Button className='bg-light me-3 border-0  d-block'>
                <BsHeart className='text-dark fs-3' />
              </Button>
              <Button className='bg-light  border-0  d-block'>
                <BsCartPlus className='text-dark fs-3' />
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
