import data from "../db/data.json";
import './Section.scss'
const Section = () => {
 
  return (
    <div className='container'>
      <div className='section row'>
        <div className='col-lg-6'>
          {data.slice(0, 1).map((el) => (
            <div className='pb-3 ' key={el.id}>
              <img className='w-100' src={el.imgUrl} alt='' />
            </div>
          ))}
          <div className='row pb-3 pb-lg-0'>
            {data.slice(1, 2).map((el) => (
              <div className='col-6 ' key={el.id}>
                <img className='w-100 card' src={el.imgUrl} alt='' />   
              </div>
            ))}
            {data.slice(2, 3).map((el) => (
              <div className='col-6' key={el.id}>
                <img className='w-100' src={el.imgUrl} alt='' />
              </div>
            ))}
          </div>
        </div>

        {data.slice(3, 4).map((el) => (
          <div className='col-lg-6' key={el.id}>
            <img className='w-100' src={el.imgUrl} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
