import React, { useState, useEffect } from "react";
import putData from "../functions/putData";
import fetchData from "../functions/fetchData";
import AdminAdoptReqRow from "../components/AdminAdoptReqRow";
import AdminAdoptReqRowDone from "../components/AdminAdoptReqRowDone";
import TableHeadings from "../components/TableHeadings";

const AdminAdoptReqIndex = props => {
  const [applicants, setApplicants] = useState([]);
  const [appDecision, setAppDecision] = useState({});

  const apiEndpoint = "/api/v1/adoption/applications";
  const apiPutEndpoint = "/api/v1/adoption/application/decision";

  const fetchApplicants = () => fetchData(apiEndpoint, setApplicants);
  useEffect(fetchApplicants, []);

  const handleChange = event => {
    const { name, value, id } = event.currentTarget;
    const creature_id = event.currentTarget.getAttribute("data-creature_id");
    setAppDecision({
      ...appDecision,
      [name]: value,
      id: Number(id),
      creature_id: Number(creature_id)
    });
  };

  const submitDecision = event => {
    const matchId = Number(event.target.getAttribute("data-check-id"));

    if (appDecision.id === matchId) {
      const foundApplicant = applicants.find(app => app.id === matchId);

      if (appDecision.application_status === "approved") {
        const creaturePayload = {
          ...foundApplicant.creature,
          adoptionStatus: "adopted"
        };
        console.log("creaturePayload", creaturePayload);
        const payloadApproved = {
          ...foundApplicant,
          applicationStatus: "approved"
        };
        putData(
          `/api/v1/adopted/${foundApplicant.creature.id}`,
          creaturePayload
        );
        putData(`${apiPutEndpoint}/${matchId}/approved`, payloadApproved);
      } else if (appDecision.application_status === "denied") {
        const payloadDenied = {
          ...foundApplicant,
          applicationStatus: "denied"
        };
        putData(`${apiPutEndpoint}/${matchId}/denied`, payloadDenied);
      }
    }
  };

  const availToAdopt = applicants.filter(
    app =>
      app.creature.adoptionStatus === "available" &&
      app.applicationStatus === "pending"
  );
  const notAvailToAdopt = applicants.filter(
    app =>
      app.creature.adoptionStatus !== "available" ||
      app.applicationStatus !== "pending"
  );

  const mapApplicants = availToAdopt.map(app => (
    <AdminAdoptReqRow
      key={app.id}
      applicant={app}
      handleChange={handleChange}
      submitDecision={submitDecision}
    />
  ));

  const mapDoneApps = notAvailToAdopt.map(app => (
    <AdminAdoptReqRowDone
      key={app.id}
      applicant={app}
      handleChange={handleChange}
      submitDecision={submitDecision}
    />
  ));

  return (
    <div>
      <h3>Pending Adoption Requests</h3>
      <table className="hover">
        <TableHeadings lastColumnName={"Decision"} />
        <tbody>{mapApplicants}</tbody>
      </table>
      <h3>Decisions Made</h3>
      <table className="hover">
        <TableHeadings lastColumnName={"Decision"} />
        <tbody>{mapDoneApps}</tbody>
      </table>
    </div>
  );
};

export default AdminAdoptReqIndex;
