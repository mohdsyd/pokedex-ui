import { Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import Header from "../../common/Header";
import "./PokemonDetails.css";

interface IProps {
  name?: string;
}

const PokemonDetails: React.FC<IProps> = (props: IProps) => {
  const { name } = useParams();
  const [pokemon, setPokemon] = React.useState({} as any);

  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      localStorage.setItem(pokemon?.name, "true");
    } else {
      localStorage.setItem(pokemon?.name, "false");
    }
    setIsChecked((current) => !current);
  };

  const fetchPokemon = async () => {
    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const data: any = await pokemonData.json();
    const getSavedPokemon = localStorage.getItem(data.name) === "true";
    setIsChecked(getSavedPokemon);
    setPokemon(data);
  };

  React.useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="detail-container">
        <div>
          <img
            className="image-container"
            src={pokemon?.sprites?.front_default}
          ></img>
          <div className="image-lg-container">
            <img
              src={pokemon?.sprites?.other?.dream_world?.front_default}
            ></img>
          </div>
          <div className="name">{pokemon?.name?.toUpperCase()}</div>
          <div className="detail-heigth">Heigth: {pokemon?.height}</div>
          <div className="detail-weigth">Weight: {pokemon?.weight}</div>
          <div className="detail-in-bag">
            In bag{" "}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              id="subscribe"
              name="subscribe"
            ></input>
          </div>
          <div className="types">
            {pokemon?.types
              ?.flatMap((type) => type?.type?.name)
              .map((d, index) => {
                return <span className="ability-i">{d}</span>;
              })}
          </div>

          <div className="description">
            <div>
              {`Lorem ipsum dolor sit amet. Ab omnis illo qui delectus aliquid est eaque molestiae. Quo dolores fugiat a iusto autem in rerum fugiat vel illo deleniti aut eius sunt id consequatur molestias qui fugit dolorem!`}
            </div>
          </div>
          <div className="ability">
            <Typography>ABILITIES</Typography>
          </div>
          <div className="abilities">
            {pokemon?.abilities
              ?.flatMap((ability) => ability?.ability?.name)
              .map((d, index) => {
                return <div className="ability-i">{d}</div>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

PokemonDetails.defaultProps = {
  name: "world",
};

export default PokemonDetails;
