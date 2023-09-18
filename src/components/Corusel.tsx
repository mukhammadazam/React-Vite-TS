import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import card from "../../public/shopImg/carta.png";
import { Link } from "react-router-dom";
import "./Corusel.scss";
const Corusel = () => {
  return (
    <div className='Card'>
      <div className='container'>
        <Carousel>
          <CarouselItem>
            <div className='d-md-flex align-items-md-center justify-content-md-around'>
              <div className='d-flex justify-content-center'>
                <div className=''>
                  <span className='Card__leni d-block'>Klarna Card</span>
                  <p className='Card__title'>Pay anywhere that accepts Visa.</p>
                  <p className='Card__text'>
                    More time to pay is what we do. Charging interest? Not our
                    thing. The Klarna Card has a 0% APR. Your credit score won’t
                    be affected when you apply for or use the Klarna Card.
                  </p>
                  <Link
                    className='d-block Card__link text-decoration-none '
                    to='/LearMore'>
                    Lear More
                  </Link>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <img src={card} alt='card' />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='d-md-flex align-items-md-center justify-content-md-around'>
              <div className='d-flex justify-content-center'>
                <div className=''>
                  <span className='Card__leni d-block'>Klarna Card</span>
                  <p className='Card__title'>Pay anywhere that accepts Visa.</p>
                  <p className='Card__text'>
                    More time to pay is what we do. Charging interest? Not our
                    thing. The Klarna Card has a 0% APR. Your credit score won’t
                    be affected when you apply for or use the Klarna Card.
                  </p>
                  <Link
                    to='/LearMore'
                    className='d-block Card__link text-decoration-none '>
                    Lear More
                  </Link>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <img src={card} alt='card' />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default Corusel;
