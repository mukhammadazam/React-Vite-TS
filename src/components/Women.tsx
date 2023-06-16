import data from "../db/card.json";
import "./Women.scss";

const Women = () => {
  return (
    <div className='container'>
      <div className='women'>
        <h4 className='women__title text-center pb-3'>WOMEN’S FASHION</h4>
        <p className='women__text text-center'>
          Shop our new arrivals from established brands
        </p>
        <div className=' pb-5 women__shop d-flex gap-5'>
          {data.map((el) => (
            <div key={el.id} className='col '>
              <img
                className='women__img  '
                src={el.imgUrl}
                alt={el.title}
                height='371'
              />
              <p className='women__shop--text pt-3 m-0'>{el.name}</p>
              <p className='women__shop--title m-0'>{el.title}</p>  
              <p className='women__shop--title m-0'>{el.noPrice}</p>  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
