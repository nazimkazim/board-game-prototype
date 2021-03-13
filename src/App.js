import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
const { v4: uuidv4 } = require('uuid');

const _cells = [
  {

    gridArea: '1/ 1 / 2 / 2',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '1 / 2 / 2 / 3',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '1 / 3 / 2 / 4',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '1 / 4 / 2 / 5',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '1 / 5 / 2 / 6',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '2 / 5 / 3 / 6',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '3 / 5 / 4 / 6',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '4 / 5 / 5 / 6',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '5 / 5 / 6 / 6',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '5 / 4 / 6 / 5',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '5 / 3 / 6 / 4',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '5 / 2 / 6 / 3',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '5 / 1 / 6 / 2',
    id: uuidv4(),
    move: false
  }, {
    gridArea: '4 / 1 / 5 / 2',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '3 / 1 / 4 / 2',
    id: uuidv4(),
    move: false
  }, {

    gridArea: '2 / 1 / 3 / 2',
    id: uuidv4(),
    move: false
  },
];

const Parent = styled.div`
  position:relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
  max-width:100vh;
  margin: 0 auto;
}
`;

const Cell = styled.div`
  grid-area:${props => props.gridArea};
  border:${props => props.move && `2px solid yellow`};
  height:calc(100vh / 5); 
  weight:calc(100vh / 5);
  background-color: blue;
`;

const Button = styled.div`
  position:absolute;
  min-width:30px;
  height:30px;
  top:2px;
  left:10px;
  background-color:red;
`;

function App() {

  const [cells, setCells] = useState(_cells);
  const [position, setPosition] = useState(0);

  const movePlayer = () => {
    const randomNum = getRandomIntInclusive(1, 6);
    const found = cells.filter((_, i) => i === randomNum);
  };

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return (
    <>
      <Button onClick={ movePlayer }>Button</Button>
      <Parent>
        { cells.map(item => (
          <Cell key={ item.id } move={ item.move } gridArea={ item.gridArea }>data</Cell>
        )) }
      </Parent>
    </>
  );
}

export default App;
