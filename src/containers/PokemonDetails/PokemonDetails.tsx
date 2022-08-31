import * as React from 'react';

interface IProps {
  name?: string;
}

const PokemonDetails: React.FC<IProps> = (props: IProps) => (
    <div>
        Deets
    </div>
);

PokemonDetails.defaultProps = {
  name: 'world',
};

export default PokemonDetails;