import React from "react";
import "./App.css";
import _ from "lodash";

const App = () => {
  const data = _.get(JSON.parse(JSON_DATA), "recipients", []);

  // const allTags = _.map(data, (o) => _.get(o, "tags", []));

  // const uniTags = _.union(_.flattenDeep(allTags));

  const result = _.map(data, (o) => {
    const tags = _.get(o, "tags", []);
    const name = _.get(o, "name", "");

    const a = _.map(tags, (v) => ({ tagName: v, name }));

    return a;
  });

  console.log({ result: _.groupBy(_.flattenDeep(result), "tagName") });

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
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
