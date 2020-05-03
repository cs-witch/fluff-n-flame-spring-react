import React from "react";
import { Link } from "react-router-dom";

const UserAdoptReqRow = props => {

  const linkString = `/pending_applications/edit/${props.applicant.id}`;

  return (
    <tr>
      <td>{props.applicant.id}</td>
      <td>{props.applicant.name}</td>
      <td>{props.applicant.phoneNumber}</td>
      <td>{props.applicant.email}</td>
      <td>{props.applicant.homeStatus}</td>
      <td>
        <a
          href={`creatures/${props.applicant.creature.creatureType.type}/${props.applicant.creature.id}`}
          target="_blank"
        >
          {props.applicant.creature.name}
        </a>
      </td>
      <td>{props.applicant.creature.adoptionStatus}</td>
      <td>
        <Link
          className="button success"
          data-check-id={props.applicant.id}
          to={linkString}
        >
          Edit
        </Link>
        <form
          onSubmit={props.deleteOnSubmit}
          data-check-id={props.applicant.id}
        >
          <input className="button alert" type="submit" value="Delete" />
        </form>
      </td>
    </tr>
  );
};

export default UserAdoptReqRow;
