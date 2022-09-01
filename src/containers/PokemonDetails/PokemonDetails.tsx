import * as React from 'react';
import Header from '../../common/Header';
import './PokemonDetails.css'

interface IProps {
  name?: string;
}

const PokemonDetails: React.FC<IProps> = (props: IProps) => (
    <div>
        <Header />
        <div className='detail-container'>
            
            <div>
            <div className='image-container'>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'></img>
            </div>
            <div className='detail-info'>
                Name
            </div>
            <div className='detail-info'>
                Heigth: {10}
            </div>
            <div className='detail-info'>
                Weight: {100}
            </div>
            <div className='detail-info'>
                In bag <input type="checkbox"></input>
            </div>
            </div>
            <div className='image-lg-container'>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'></img>
            </div>
            

        </div>
    </div>
);

PokemonDetails.defaultProps = {
  name: 'world',
};

export default PokemonDetails;