import React, { useState, useEffect } from "react";
import ErrorList from "./ErrorList";
import fetchData from "../functions/fetchData";
import validateForm from "../functions/validateForm";

const NewCreatureForm = props => {
  const defaultForm = {
    name: "",
    phoneNumber: "",
    email: "",
    petName: "",
    petAge: "",
    petType: "",
    petImageUrl: "",
    vaccinationStatus: ""
  };

  const [formState, setFormState] = useState(defaultForm);
  const [errors, setErrors] = useState({});

  const [creatureTypes, setCreatureTypes] = useState([]);
  const apiEndpoint = "/api/v1/all/types";
  const fetchCreatureTypes = () => fetchData(apiEndpoint, setCreatureTypes);
  useEffect(fetchCreatureTypes, []);
  let listTypes = <option>LOADING...</option>;
  if (creatureTypes !== undefined) {
    listTypes = creatureTypes
      .sort((a, b) => (a.type > b.type ? 1 : b.type > a.type ? -1 : 0))
      .map(creature => (
        <option key={creature.id} type="text" value={creature.type}>
          {creature.type}
        </option>
      ));
  }

  const clearForm = () => setFormState(defaultForm);

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.currentTarget.id]: event.currentTarget.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      validateForm(
        ["name", "phoneNumber", "email", "petName", "petAge", "petImageUrl"],
        formState,
        setErrors
      )
    ) {
      const convertPayload = {
        name: formState.name,
        phoneNumber: formState.phoneNumber,
        email: formState.email,
        petName: formState.petName,
        petAge: formState.petAge,
        petImageUrl: formState.petImageUrl,
        vaccinationStatus: formState.vaccinationStatus,
        applicationStatus: "pending",
        creatureType: {
          ...creatureTypes.find(eachType => eachType.type === formState.petType)
        }
      };
      props.addNewCreature(convertPayload);
      setFormState(defaultForm);
    }
  };

  return (
    <form className="callout surrender-form" onSubmit={handleSubmit}>
      <h2 className="text-center">Surrender Your Creature</h2>
      <ErrorList errors={errors} />
      <label>Applicant Name*:</label>
      <input
        name="name"
        id="name"
        type="text"
        value={formState.name}
        onChange={handleChange}
      />
      <label>Phone Number*:</label>
      <input
        name="phoneNumber"
        id="phoneNumber"
        type="text"
        value={formState.phoneNumber}
        onChange={handleChange}
      />
      <label>Email Address*:</label>
      <input
        name="email"
        id="email"
        type="text"
        value={formState.email}
        onChange={handleChange}
      />
      <label>Pet Name*:</label>
      <input
        name="petName"
        id="petName"
        type="text"
        value={formState.petName}
        onChange={handleChange}
      />
      <label>Pet Age*:</label>
      <input
        name="petAge"
        id="petAge"
        type="number"
        value={formState.petAge}
        onChange={handleChange}
      />
      <label>Pet Type*:</label>
      <select
        name="petType"
        id="petType"
        value={formState.petType}
        onChange={handleChange}
        required
      >
        <option type="text" value="">
          -
        </option>
        {listTypes}
      </select>
      <label>Pet Image URL*:</label>
      <input
        name="petImageUrl"
        id="petImageUrl"
        type="text"
        value={formState.petImageUrl}
        onChange={handleChange}
      />
      <label>Vaccination Status*:</label>
      <select
        name="vaccinationStatus"
        id="vaccinationStatus"
        value={formState.vaccinationStatus}
        onChange={handleChange}
        required
      >
        <option value="">-</option>
        <option value="true">Vaccinated</option>
        <option value="false">Not Vaccinated</option>
      </select>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" type="button" onClick={clearForm}>
          Clear
        </button>
      </div>
      <div>* All fields required.</div>
    </form>
  );
};

export default NewCreatureForm;
