import React, { useState, useEffect } from "react";
import NewCreatureForm from "../components/NewCreatureForm";
import postData from "../functions/postData";

const NewCreature = props => {
  const [submitted, setSubmitted] = useState(false);

  const apiPath = "/api/v1/surrender/new";

  const addNewCreature = formPayLoad => {
    event.preventDefault();
    postData(apiPath, formPayLoad, setSubmitted);
  };

  let submittedResponse = "Your request is in process.";
  if (submitted) {
    return <h2 className="align-center">{submittedResponse}</h2>;
  } else {
    return <NewCreatureForm addNewCreature={addNewCreature} />;
  }
};

export default NewCreature;
