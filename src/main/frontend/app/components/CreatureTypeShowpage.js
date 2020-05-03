import React, { useState, useEffect } from "react";
import CreatureInformation from "./CreatureInformation";
import NotFound404 from "./NotFound404";
import fetchData from "../functions/fetchData";

const CreatureTypeShowpage = props => {
  const [creature, setCreature] = useState({});

  let currentCreature = props.match.params.type;
  let currentCreatureId = Number(props.match.params.id);

  const apiEndpoint = `/api/v1/adoptable/${currentCreature}/${currentCreatureId}`;
  const fetchCreature = () => fetchData(apiEndpoint, setCreature);

  useEffect(fetchCreature, {});

  if (creature === null) {
    return <NotFound404 />;
  } else if (creature.creatureType !== undefined) {
    if (creature.creatureType.type !== undefined) {
      if (
        currentCreature === creature.creatureType.type &&
        currentCreatureId === creature.id
      ) {
        return <CreatureInformation creature={creature} />;
      } else {
        return <NotFound404 />;
      }
    }
  }

  return <NotFound404 />;
};

export default CreatureTypeShowpage;
