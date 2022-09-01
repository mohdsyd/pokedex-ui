import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

interface IProps {
  img?: string;
  name?: string;
  id?: number;
}

const Card: React.FC<IProps> = (props: IProps) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/pokedex/${props.name}`);
  };

  return (
    <div onClick={navigateToDetails} className="card">
      <img className="card-img" alt="card" src={props.img}></img>
      <strong className="card-name"> {props.name}</strong>
    </div>
  );
};

Card.defaultProps = {
  name: "world",
};

export default Card;
