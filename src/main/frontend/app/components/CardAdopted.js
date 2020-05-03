import React from "react";
import { Link } from "react-router-dom";

const CardAdopted = props => {
  return (
    <div className="column text-center">
      <div className="callout">
        <h3>{props.creatures.name}</h3>
        <img
          className="img-radix2us"
          src={props.creatures.creatureImg}
          alt={props.creatures.name}
        />
        <p className="lead">{props.creatures.adoptionStory}</p>
        <Link
          className="button expanded"
          to={`creatures/${props.creatures.creatureType.type}`}
        >
          Adopt your own {props.creatures.creatureType.type}!
        </Link>
      </div>
    </div>
  );
};

export default CardAdopted;
