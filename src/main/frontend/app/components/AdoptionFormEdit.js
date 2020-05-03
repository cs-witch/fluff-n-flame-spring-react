import React, { useState } from "react";
import ErrorList from "./ErrorList";
import validateForm from "../functions/validateForm";
import putData from "../functions/putData";

const AdoptionFormEdit = props => {
  const [updateApplicant, setUpdateApplicant] = useState(props.updateApplicant);
  const [updatedNotice, setUpdatedNotice] = useState(false);
  const [errors, setErrors] = useState({});

  const putApiPath = `/api/v1/adoption/application/edit/${updateApplicant.id}`;

  setTimeout(() => setUpdatedNotice(false), 6000);

  const clearForm = () => {
    setUpdateApplicant({
      id: updateApplicant.id,
      name: "",
      phoneNumber: "",
      email: "",
      homeStatus: "",
      creature: updateApplicant.creature
    });
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setUpdateApplicant({ ...updateApplicant, [name]: value });
  };

  const onEditSubmit = () => {
    event.preventDefault();
    if (
      validateForm(
        ["name", "phoneNumber", "email", "homeStatus"],
        updateApplicant,
        setErrors
      )
    ) {
      putData(putApiPath, updateApplicant);
      setUpdatedNotice(true);
    }
  };

  return (
    <form className="callout" onSubmit={onEditSubmit}>
      <ErrorList errors={errors} />
      {updatedNotice && <h2 className="fade-out">Update Successful</h2>}
      <label>
        Applicant Name*:
        <input
          name="name"
          id="adoptionForm-name"
          type="text"
          value={updateApplicant.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number*:
        <input
          name="phoneNumber"
          id="adoptionForm-phoneNumber"
          type="text"
          value={updateApplicant.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Email Address*:
        <input
          name="email"
          id="adoptionForm-email"
          type="text"
          value={updateApplicant.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Home Status*:
        <select
          name="homeStatus"
          id="adoptionForm-homeStatus"
          value={updateApplicant.homeStatus}
          onChange={handleChange}
        >
          <option type="text" value="">
            -
          </option>
          <option type="text" value="rent">
            Rent
          </option>
          <option type="text" value="own">
            Own
          </option>
        </select>
      </label>
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

export default AdoptionFormEdit;
