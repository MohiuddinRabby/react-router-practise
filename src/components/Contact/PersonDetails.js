import React from "react";
import { useHistory } from "react-router-dom";

const PersonDetails = () => {
  const history = useHistory();
  const locationName = history.location.pathname;
  const personName = history.location.state.name;
  const phone = history.location.state.phone;

  console.log(history);
  return (
    <div>
      <p className=" alert alert-primary">{locationName}</p>
      <h1>Person Details page</h1>
      <h3>Name: {personName}</h3>
      <h4>Phone: {phone}</h4>
    </div>
  );
};

export default PersonDetails;
