import "./Avone.scss";
import data from "../db/style.json";
import bg from "../assets/bgimg/bg.png";

import { Link } from "react-router-dom";
const Avone = () => {
  return (
    <div className='container'>
      <div className='avone'>
        <h3 className='text-center avone__title'>AVONE STYLES</h3>
        <p className='avone__text text-center'>Choose Your Favorite Color</p>

        <div className='section row'>
          <div className='col-lg-6'>
            {data.slice(0, 1).map((el) => (
              <div className='pb-3 position-relative ' key={el.id}>
                <Link
                  target='__blank'
                  to='https://www.instagram.com/'
                  className='d-flex align-items-center  wrapper__img justify-content-center'>
                  <img
                    className='w-100 imgs'
                    src={el.imgUrl}
                    alt=''
                    height={400}
                  />
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
                    <img
                      className='w-100 card imgs'
                      src={el.imgUrl}
                      alt=''
                      height={275}
                    />
                    <img className='position-absolute img' src={bg} alt='' />
                  </Link>
                </div>
              ))}
              {data.slice(2, 3).map((el) => (
                <div className='col-6' key={el.id}>
                  <Link
                    to='https://www.instagram.com/'
                    className='d-flex align-items-center  wrapper__img justify-content-center'>
                    <img
                      className='w-100 imgs rounded'
                      src={el.imgUrl}
                      alt=''
                      height={275}
                    />
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
        {/* <div className='row pt-5'>
          <div className='col-lg-6  col-12   pt-5'>
            <img src={avone} alt='' width={552} height={602} />
          </div>

          <div className='col-lg-6 col-12   position-relative top-0 '>
            <img className='position-absolute end-0' src={avone1} alt='' width={514} height={452} />
            <img
              className=' position-absolute end-0 bottom-0'
              src={avone2}
              alt='' width={227} height={281}
            />
            <Link to=''>SHOW WOMEN’S DRESS</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Avone;
