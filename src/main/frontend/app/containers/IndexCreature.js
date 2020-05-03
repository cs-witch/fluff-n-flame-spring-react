import React, { useState, useEffect, Fragment } from "react";
import fetchData from "../functions/fetchData";
import AllCreaturesTile from "../components/AllCreaturesTile";

const IndexCreature = props => {
  const [creatures, setCreatures] = useState([]);
  const byType = props.match.params.type;
  const apiEndpoint = `/api/v1/adoptable/${byType}`;
  const fetchCreatures = () => fetchData(apiEndpoint, setCreatures);
  useEffect(fetchCreatures, []);

  const available = creatures.filter(
    creature => creature.adoptionStatus === "available"
  );

  const mapCreatures = available.map(creature => (
    <AllCreaturesTile
      key={creature.id}
      imgUrl={creature.creatureImg}
      name={creature.name}
      age={creature.age}
      vacStatus={creature.vaccinationStatus}
      type={creature.creatureType.type}
      creatureId={creature.id}
    />
  ));
  return (
    <Fragment>
      <h2 className="text-center">Find the {byType} of your dreams!</h2>
      <div className="row small-up-1 medium-up-2 large-up-3">
        {mapCreatures}
      </div>
    </Fragment>
  );
};

export default IndexCreature;
