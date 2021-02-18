import React from "react";
import { Link, useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const contactPersonData = history.location.state;
  return (
    <div>
      <h1>Contact Page</h1>
      <h3>Contact with these people.</h3>
      {contactPersonData.map((name) => (
        <Link to={{ pathname: `/personDetails/${name?.id}`, state: name }}>
          <li key={name?.id}>{name?.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Contact;
