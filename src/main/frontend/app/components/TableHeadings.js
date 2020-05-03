import React from "react";

const TableHeadings = (props) => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Applicant Name</th>
        <th>Number</th>
        <th>Email</th>
        <th>Home Status</th>
        <th>Creature Name</th>
        <th>Creature Status</th>
        <th>{props.lastColumnName}</th>
      </tr>
    </thead>
  );
};

export default TableHeadings;
