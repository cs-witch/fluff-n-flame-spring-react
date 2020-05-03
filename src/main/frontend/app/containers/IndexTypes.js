import React, { Fragment, useState, useEffect } from "react";
import fetchData from "../functions/fetchData";
import CardType from "../components/CardType";

const IndexTypes = props => {
  const [creatureTypes, setCreatureTypes] = useState([]);

  const apiEndpoint = "/api/v1/all/types";
  const fetchCreatureTypes = () => fetchData(apiEndpoint, setCreatureTypes);
  useEffect(fetchCreatureTypes, []);

  let mapTypes = "LOADING...";

  if (creatureTypes !== undefined) {
    mapTypes = creatureTypes.map(creature => (
      <CardType
        key={creature.id}
        type={creature.type}
        imgUrl={creature.imgUrl}
        description={creature.description}
      />
    ));
  }

  return (
    <Fragment>
      <h2 className="text-center">
        Find the type of magical creature to adopt!
      </h2>
      <div className="row small-up-1 medium-up-2 large-up-3 text-center">
        {mapTypes}
      </div>
    </Fragment>
  );

};

export default IndexTypes;
