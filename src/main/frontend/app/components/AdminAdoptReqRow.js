import React from "react";

const AdminAdoptReqRow = props => {
  return (
    <tr>
      <td>{props.applicant.id}</td>
      <td>{props.applicant.name}</td>
      <td>{props.applicant.phoneNumber}</td>
      <td>{props.applicant.email}</td>
      <td>{props.applicant.homeStatus}</td>
      <td>
        <a href={`creatures/${props.applicant.creature.creatureType.type}/${props.applicant.creature.id}`} target="_blank">
          {props.applicant.creature.name}
        </a>
      </td>
      <td>{props.applicant.creature.adoptionStatus}</td>
      <td>
        {props.applicant.applicationStatus === "pending" ? (
          <form onSubmit={props.submitDecision} data-check-id={props.applicant.id}>
            <select
              name="application_status"
              id={props.applicant.id}
              data-creature_id={props.applicant.creature.id}
              onChange={props.handleChange}
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </select>
            <input className="button" type="submit" value="Submit" />
          </form>
        ) : (
          `${props.applicant.applicationStatus}`
        )}
      </td>
    </tr>
  );
};

export default AdminAdoptReqRow;
