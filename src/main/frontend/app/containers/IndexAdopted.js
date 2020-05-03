import React, { useState, useEffect } from "react";
import fetchData from "../functions/fetchData";
import CardAdopted from "../components/CardAdopted";

const IndexAdopted = props => {
  const [creatures, setCreatures] = useState([]);
  const apiEndpoint = `/api/v1/creatures/adopted`;

  const fetchCreatures = () => fetchData(apiEndpoint, setCreatures);
  useEffect(fetchCreatures, []);

  const mapCreatures = creatures.map(creature => (
    <CardAdopted key={creature.id} creatures={creature} />
  ));
  return (
    <>
      <h2 className="text-center">Happily Adopted Creatures!</h2>
      <div className="row small-up-1 medium-up-2 large-up-3">
        {mapCreatures}
      </div>
    </>
  );
};

export default IndexAdopted;
