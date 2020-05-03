import React from "react";
import AdoptionFormButton from "./AdoptionFormButton";

const CreatureInformation = props => {
  let vaccination;
  if (!props.creature.vaccinationStatus) {
    vaccination = "not vaccinated";
  } else {
    vaccination = "vaccinated";
  }

  return (
    <div className="text-center">
      <h2>{props.creature.name}</h2>
      <img className="img-tweaks" src={props.creature.creatureImg} />
      <p className="lead bold-me">
        {props.creature.name} is {props.creature.age} years old and is{" "}
        {vaccination}.
      </p>
      <p className="lead">
        <span className="bold-me">My Story: </span>
        {props.creature.adoptionStory}
      </p>
      <AdoptionFormButton attachedCreature={props.creature} />
    </div>
  );
};

export default CreatureInformation;
