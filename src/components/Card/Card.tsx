import * as React from 'react';
import './Card.css'

interface IProps {
    img?: string;
    name?: string;
}

const Card: React.FC<IProps> = (props: IProps) => (
  <div onClick={()=>{console.log('here')}}className='card'>
    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'></img>
     <h1> {props.name}</h1>
  </div>  
);

Card.defaultProps = {
  name: 'world',
};

export default Card;