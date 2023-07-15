import logo from "../assets/LOGO.svg";
const Footer = () => {
  return (
    <div className='container'>
      <div className='footer'>
        <div className=''>
          <img src={logo} alt='logo' />
          <p className='footer__text'>
            We earned a reputation of being good at what we do. Let us take your
            online shop to new dimension in success!
          </p>
        </div>
        <div className=''>
          <h4 className='footer__title'>RECIVE EMAIL UPDATES</h4>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
