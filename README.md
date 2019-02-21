# Formla-Parser
A react app that parses API provided formula, does calculation, and sends result to the API

## **Input and Output**

### Sample Input provided by the API
```Json
[
  {
    "formula": "a+b+2+x"
  },
  {
    "formula": "c-d+v"
  }	
]
```

### Sample Output posted to the API
```Json
[
  {
    "formula": "a+b+2+x",
    "values": {
      "a": 2,
      "b": 3,
      "x": 4
    },
    "result": 11
  },
  {
    "formula": "c-d+v",
    "values": {
      "c": 10,
      "d": 5,
      "v": 4
    },
    "result": 9
  }	
]
```

## **How to run**

- Make sure to have the node version `v10.15.1` and npm version `6.4.1`. Install the latest `lts` via [nvm](https://github.com/creationix/nvm).
- Backend server must be kept running to successfully run the frontend. Open terminal and `cd` to `backend` directory.
- run `npm i`
- run `npm start`
- In another terminal/tab `cd` to `frontend` directory.
- run `npm i`
- run `npm start`
- fill the inputs and hit `submit` button.
- monitor the terminal where `backend` is running. The result will be printed in the terminal.
- run `npm test` to run test. This has no connection with the `backend`.

** `frontend` uses [create-react-app](https://facebook.github.io/create-react-app/).