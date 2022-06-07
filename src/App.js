import React from 'react';
import './App.css';

const App = () => {
  const [namePair, setNamePair] = React.useState([]);

  React.useEffect(() => {
    console.time('F1');
    let i = 0;
    while (i < 1) {
      setNamePair(
        findTagsPair(
          JSON.parse(JSON_DATA).recipients.filter(
            (item) => item.tags.length >= 2
          )
        )
      );
      i++;
    }
    console.timeEnd('F1');
  }, []);

  return (
    <div>
      {namePair.map((item, index) => (
        <div key={index}>
          {index + 1}). {item}
        </div>
      ))}
    </div>
  );
};

function findTagsPair(DATA) {
  const nameTagsPair = {};
  const namePair = [];

  for (let i = 0; i < DATA.length; i++) {
    for (let j = i + 1; j < DATA.length; j++) {
      const tags = [...DATA[i].tags, ...DATA[j].tags];
      nameTagsPair[`${DATA[i].name}, ${DATA[j].name}`] = tags;
    }
  }

  const nameTagsPairArr = Object.entries(nameTagsPair);

  for (let i = 0; i < nameTagsPairArr.length; i++) {
    let matches = 0;
    const sortedTags = nameTagsPairArr[i][1].sort();

    let tempMatch = '';
    for (let j = 1; j < sortedTags.length; j++) {
      if (sortedTags[j] === sortedTags[j - 1] && tempMatch !== sortedTags[j]) {
        tempMatch = sortedTags[j];
        matches++;
      }
    }

    if (matches >= 2) {
      namePair.push(nameTagsPairArr[i][0]);
    }
  }
  return namePair;
}

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
