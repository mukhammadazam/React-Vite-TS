import data from "../db/data.json";
import "./Section.scss";
import bg from "../assets/bgimg/bg.png";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div className='container'>
      <div className='section row'>
        <div className='col-lg-6'>
          {data.slice(0, 1).map((el) => (
            <div className='pb-3 position-relative ' key={el.id}>
              <Link
                target='__blank'
                to='https://www.instagram.com/'
                className='d-flex align-items-center  wrapper__img justify-content-center'>
                <img className='w-100 imgs' src={el.imgUrl} alt='' />
                <img className='position-absolute img' src={bg} alt='' />
              </Link>
            </div>
          ))}
          <div className='row pb-3 pb-lg-0'>
            {data.slice(1, 2).map((el) => (
              <div className='col-6 ' key={el.id}>
                <Link
                  to='https://www.instagram.com/'
                  className='d-flex align-items-center  wrapper__img justify-content-center'>
                  <img className='w-100 card imgs' src={el.imgUrl} alt='' />
                  <img className='position-absolute img' src={bg} alt='' />
                </Link>
              </div>
            ))}
            {data.slice(2, 3).map((el) => (
              <div className='col-6' key={el.id}>
                <Link
                  to='https://www.instagram.com/'
                  className='d-flex align-items-center  wrapper__img justify-content-center'>
                  <img className='w-100 imgs' src={el.imgUrl} alt='' />
                  <img className='position-absolute img' src={bg} alt='' />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {data.slice(3, 4).map((el) => (
          <div className='col-lg-6' key={el.id}>
            <Link
              to='https://www.instagram.com/'
              className='d-flex align-items-center  wrapper__img justify-content-center'>
            <img className='w-100 imgs' src={el.imgUrl} alt='' />
              <img className='position-absolute img' src={bg} alt='' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
