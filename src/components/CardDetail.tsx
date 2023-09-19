import React from "react";
import { useParams,Link } from "react-router-dom";
import {BsArrowRight} from 'react-icons/bs'
// Define the type for a card item
interface CardItem {
  id: string; // Assuming the card has an 'id' property
  title: string;
  imgUrl1: string;
  text: string;
  // Add other properties as needed
}

// Define the prop type for the CardDetail component
interface CardDetailProps {
  data: CardItem[];
}

const CardDetail: React.FC<CardDetailProps> = ({ data }) => {
  const { cardId } = useParams();

  // Find the card in the data array based on cardId
  const card = data.find((el) => el.id === cardId);

  if (!card) {
    // Handle the case where the card is not found (optional)
    return <div>Card not found.</div>;
  }

  return (
    <div>
      <h2>{card.title}</h2>
      <img src={card.imgUrl1} alt='pay' width={267} />
      <p>{card.text}</p>
      <Link to='/LearnMore' className='pay__row--btn'>
        Learn more <BsArrowRight className='text-dark fs-3' />
      </Link>
    </div>
  );
};

export default CardDetail;
