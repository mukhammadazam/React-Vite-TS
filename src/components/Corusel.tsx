import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";
const Corusel = () => {
  return (
    <div className='card'>
      <div className='container'>
        <Carousel>
          <CarouselItem>
            <span className='card__leni d-block'>Klarna Card</span>
            <p className='card__title'>Pay anywhere that accepts Visa.</p>
            <p className='card__text'>
              More time to pay is what we do. Charging interest? Not our thing.
              The Klarna Card has a 0% APR. Your credit score won’t be affected
              when you apply for or use the Klarna Card.
            </p>
            <Link to='/'>Lear More</Link>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default Corusel;
