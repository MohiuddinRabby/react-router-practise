import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import dataDemo from "../../dataDemo";


const Home = () => {
  const history = useHistory();
  const [data, setData] = useState(dataDemo);
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <h1>Other Pages</h1>
        <button
          onClick={() => {
            history.push({
              pathname: `/contact`,
              state: data,
            });
          }}
        >
          Go to contact page
        </button>
      </div>
    </div>
  );
};

export default Home;
