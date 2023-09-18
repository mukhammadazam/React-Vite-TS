import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Corusel.scss";
const Corusel = () => {
  return (
    <div className='Card'>
      <div className='container'>
        <Carousel>
          <CarouselItem>
            <div className=''>
              <span className='Card__leni d-block'>Klarna Card</span>
              <p className='Card__title'>Pay anywhere that accepts Visa.</p>
              <p className='Card__text'>
                More time to pay is what we do. Charging interest? Not our
                thing. The Klarna Card has a 0% APR. Your credit score won’t be
                affected when you apply for or use the Klarna Card.
              </p>
              <Link className='d-block Card__link text-decoration-none ' to='/'>
                Lear More
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="row">
            <div className='col-12 col-lg-6'>
              <span className='Card__leni d-block'>Klarna Card</span>
              <p className='Card__title'>Pay anywhere that accepts Visa.</p>
              <p className='Card__text'>
                More time to pay is what we do. Charging interest? Not our
                thing. The Klarna Card has a 0% APR. Your credit score won’t be
                affected when you apply for or use the Klarna Card.
              </p>
              <Link className='d-block Card__link text-decoration-none ' to='/'>
                Lear More
              </Link>
            </div>
            <div className="col-12 col-lg-6">

            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default Corusel;
