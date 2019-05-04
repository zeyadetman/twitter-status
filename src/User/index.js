import React, { useState } from "react";
import { Query } from "react-apollo";
import getUserData from "../GraphQL/getUserData.js";
import Card from "./Card.js";

function User() {
  const [user, setUser] = useState("");

  return (
    <div>
      <div>
        <label>
          Enter username{" "}
          <input
            placeholder="ex. zeyadetman"
            onKeyPress={e => {
              if (e.key === "Enter") setUser(e.target.value);
            }}
          />
        </label>
      </div>
      <Query
        query={getUserData}
        variables={{
          identifier: "name",
          identity: user
        }}
      >
        {({ loading, data, error }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return null;

          return <Card data={data.twitter.user} />;
        }}
      </Query>
    </div>
  );
}

export default User;
