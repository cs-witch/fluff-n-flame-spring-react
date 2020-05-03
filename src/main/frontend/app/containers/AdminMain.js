import React, {Fragment} from "react";
import AdminAdoptReqIndex from "./AdminAdoptReqIndex";

const AdminMain = props => {
  return (
    <Fragment>
      <h2 className="text-center">Administrator Portal</h2>
      <AdminAdoptReqIndex />
    </Fragment>
  );
};

export default AdminMain;

