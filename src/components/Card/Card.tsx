import * as React from 'react';
import './Card.css'

interface IProps {
    img?: string;
    name?: string;
}

const Card: React.FC<IProps> = (props: IProps) => (
  <div className='card'>
     <h1> {props.name}</h1>
  </div>  
);

Card.defaultProps = {
  name: 'world',
};

export default Card;