import React from "react";
import "./App.css";
import _ from "lodash";

const App = () => {
  // * Get data from json
  const data = _.get(JSON.parse(JSON_DATA), "recipients", []);

  // * Mapping every user
  const users = _.map(data, (user) => {
    // * Current user prop
    const id = _.get(user, "id", null);
    const name = _.get(user, "name", null);
    const tags = _.get(user, "tags", []);

    // * Mapping with another user
    const newData = _.map(data, (o) => {
      const n = _.get(o, "name", null);
      const t = _.get(o, "tags", []);
      // * Check is not same as current user
      if (name !== n) {
        // * Compare current user tag with other user tag
        const dataResult = _.filter(tags, (value) => _.includes(t, value));
        // * Check dataResult is more than 2 tags
        if (dataResult.length > 1) return { id, name, tags: dataResult };
      }
    });

    // * Remove undefined from newData
    return _.compact(newData);
  });

  // * Returns the new flattened array
  const newUsersData = _.flattenDeep(users);

  // * Group by union tag from newUsersData and finally convert the object to array
  const groupByUnionTag = _.toPairsIn(_.groupBy(newUsersData, "tags"));

  // * Formatting data from groupByUnionTag
  const formattedData = _.map(groupByUnionTag, (item) => ({
    title: item[0],
    users: _.map(_.unionBy(item[1], "name"), (v) => v.name),
  }));

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <h3>Default Data:</h3>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Tags</th>
        </tr>
        {_.map(data, (o) => (
          <tr>
            <td>{_.get(o, "id", "")}</td>
            <td>{_.get(o, "name", "")}</td>
            <td>{_.toString(_.get(o, "tags", []))}</td>
          </tr>
        ))}
      </table>
      <br />
      <h3>Result:</h3>
      <table>
        <tr>
          <th>No.</th>
          <th>Tags</th>
          <th>Users</th>
        </tr>
        {_.map(formattedData, (o, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{_.get(o, "title", "")}</td>
            <td>{_.get(o, "users", []).toString()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;

const JSON_DATA = `{
  "recipients": [
    {
      "tags": [
        "promo",
        "buyer",
        "clicker",
        "non-clicker"
      ],
      "name": "Maura Hickman",
      "id": 0
    },
    {
      "tags": [
        "shopping",
        "clicker"
      ],
      "name": "Luisa Rutledge",
      "id": 1
    },
    {
      "tags": [
        "shopping",
        "non-clicker"
      ],
      "name": "Pearson Marquez",
      "id": 2
    },
    {
      "tags": [
        "promo",
        "clicker",
        "non-clicker"
      ],
      "name": "Fern Wise",
      "id": 3
    },
    {
      "tags": [],
      "name": "Chaney Browning",
      "id": 4
    },
    {
      "tags": [
        "buyer",
        "clicker"
      ],
      "name": "Elena Vega",
      "id": 5
    },
    {
      "tags": [
        "shopping"
      ],
      "name": "Ruby Goff",
      "id": 6
    },
    {
      "tags": [
        "buyer"
      ],
      "name": "Patrica Juarez",
      "id": 7
    },
    {
      "tags": [
        "promo",
        "non-clicker"
      ],
      "name": "Alexandra Jacobson",
      "id": 8
    },
    {
      "tags": [
        "clicker"
      ],
      "name": "Eloise Buckley",
      "id": 9
    },
    {
      "tags": [
        "clicker"
      ],
      "name": "Diann Rodgers",
      "id": 10
    },
    {
      "tags": [
        "promo",
        "non-clicker"
      ],
      "name": "Burt Hampton",
      "id": 11
    },
    {
      "tags": [
        "shopping",
        "buyer",
        "clicker"
      ],
      "name": "Sylvia Norman",
      "id": 12
    },
    {
      "tags": [],
      "name": "Dominguez Morrison",
      "id": 13
    },
    {
      "tags": [
        "campaign",
        "shopping",
        "buyer"
      ],
      "name": "Jana Stevenson",
      "id": 14
    },
    {
      "tags": [],
      "name": "Holmes Stevens",
      "id": 15
    },
    {
      "tags": [
        "promo",
        "shopping",
        "buyer",
        "clicker"
      ],
      "name": "Colon Reynolds",
      "id": 16
    },
    {
      "tags": [
        "campaign",
        "clicker"
      ],
      "name": "Harrell Johnston",
      "id": 17
    }
  ]
}`;
