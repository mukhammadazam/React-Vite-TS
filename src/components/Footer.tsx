import { FaInstagram, FaTwitter } from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className='container'>
      <div className='footer row pb-5'>
        <div className='col-lg-6 col-12'>
          <img src={logo} alt='logo' />
          <p className='footer__text'>
            We earned a reputation of being good at what we do. Let us take your
            online shop to new dimension in success!
          </p>
        </div>
        <div className='col-lg-6 coll col-12'>
          <h4 className='footer__title'>RECIVE EMAIL UPDATES</h4>
          <form className='position-relative'>
            <input
              type='email'
              className='footer__input '
              placeholder='Your Email Address  '
            />
            <button className='footer__input--btn position-absolute'>
              JOIN
            </button>
          </form>
        </div>
      </div>
      <div className='fBottom pb-5 d-lg-flex  align-items-lg-center justify-content-lg-between'>
        <div className='fBottom__left'>
          <p className='fBottom__left--text  '>
            <DiGoogleCloudPlatform className='pe-2 fs-4' />
            location Comilla, Bangladesh 3500
          </p>
          <Link
            to='kawsarahmed0210@gmail.com'
            className='fBottom__left--text d-block text-dark'>
            kawsarahmed0210@gmail.com
          </Link>
          <p className='pt-0 '>01647470457</p>
          <div className='d-flex align-items-center '>
            <Link to='' className='text-center d-block'>
              <BsFacebook className='fs-2 pe-2 text-dark' />
            </Link>
            <Link to='' className='text-center d-block'>
              <FaInstagram className='fs-2 pe-2 text-dark' />
            </Link>
            <Link to='' className='text-center d-block'>
              <FaTwitter className='fs-2 pe-2 text-dark' />
            </Link>
            <Link to='' className='text-center d-block'>
              <AiFillLinkedin className='fs-3 text-dark' />
            </Link>
          </div>
        </div>
        <p className="coll pt-lg-0 pt-5">Copyright © 2020 . Your company name All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
