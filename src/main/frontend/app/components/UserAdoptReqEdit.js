import React, { useState, useEffect } from "react";
import fetchData from "../functions/fetchData";

import AdoptionFormEdit from "../components/AdoptionFormEdit";

const UserAdoptReqEdit = props => {
  const [applicant, setApplicant] = useState({});

  let appId = Number(props.match.params.id);
  const apiEndpointGet = `/api/v1/adoption/application/find/${appId}`;

  const fetchAvailApps = () => fetchData(apiEndpointGet, setApplicant);
  useEffect(fetchAvailApps, {});

  if (applicant.creature !== undefined) {
    const reqCreature = applicant.creature;
    return (
      <div className="text-center">
        <h2>Edit Application for {reqCreature.name}</h2>
        <img className="img-tweaks" src={reqCreature.creatureImg} />
        <p className="lead bold-me">
          {reqCreature.name} is {reqCreature.age} years old and is
          {reqCreature.vaccinationStatus ? " vaccinated" : " not vaccinated"}.
        </p>
        <p className="lead">
          <span className="bold-me">My Story: </span>
          {reqCreature.adoptionStory}
        </p>
        <AdoptionFormEdit updateApplicant={applicant} />
      </div>
    );
  } else {
    return <div className="text-center">LOADING...</div>;
  }
};

export default UserAdoptReqEdit;
