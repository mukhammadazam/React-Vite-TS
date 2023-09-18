import get from '../../public/shopImg/Getimg.png'
import { Link } from 'react-router-dom';
import './Trend.scss'
const Trend = () => {
  return (
    <div className='container'>
      <div className='d-md-flex trend align-items-md-center justify-content-md-around   '>
        <div className='d-flex pb-5 pb-md-0 justify-content-center'>
          <img src={get} alt='getImg' />
        </div>
        <div className='d-flex justify-content-center'>
          <div className=''>
            <p className='trend__title'>Get inspired.</p>
            <p className='trend__text'>
              Explore our curated lists of products and stores for more inspo.
              Find something to love in electronics, fashion, beauty and more.
            </p>
            <Link to='/' className='d-block trend__link text-center text-decoration-none'>
              Discover trends
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trend