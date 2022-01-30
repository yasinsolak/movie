import { useState } from 'react';
import { CircularProgress } from '../CircularProgress';
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import './index.scss'
import { Image } from '../Image';

interface CardProps {
  img: string;
  title: string;
  release_date: string;
  rating: number;
}

const Card = ({img, title, release_date, rating}: CardProps) => {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  return (
    <div className='card'>
      <div className='card-wrapper'>
        <Image
          className='card-img'
          src={'https://www.themoviedb.org/t/p/w1280' + img}
          alt='new'
          style={{borderColor: rating > 70 ? 'green' : 'orange'}}
        />
        <div className='circular'>
          <CircularProgress value={rating} />
        </div>
        <div className='thumbs'>
        {!downVote && (
          <FaArrowUp
            fill='white'
            size={24}
            style={{marginRight: 15}}
            fillOpacity={0.5}
            onClick={() => setUpVote(!upVote)}
        />
        )}
        {!upVote && (
            <FaArrowDown
              fill='white'
              size={24}
              fillOpacity={0.5}
              onClick={() => setDownVote(!downVote)}
          />
        )}
        </div>
      </div>
      <h2 className='title'>{title}</h2>
      <div>{release_date}</div>

    </div>
  )
}

export default Card;