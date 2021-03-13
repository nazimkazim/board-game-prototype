import {Parent, Cell, Button} from './StyledComponents'
import React, { useState } from 'react';
import {_cells} from './data'
import './App.css';


function App() {

  const [cells, setCells] = useState(_cells);
  const [position, setPosition] = useState(0);

  if (position > cells.length) {
    console.log('fdgfdg');
  }

  const movePlayer = () => {
    const randomNum = getRandomIntInclusive(1, 6);
    const newCells = [...cells];
    newCells[position].move = false;
    newCells[position + randomNum].move = true;
    setPosition(prevState => prevState + randomNum);
    setCells(newCells);
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
          <Cell
            key={ item.id }
            topBorder={ item.topBorder }
            leftBorder={ item.leftBorder }
            rightBorder={ item.rightBorder }
            bottomBorder={ item.bottomBorder }
            move={ item.move }
            gridArea={ item.gridArea }
            backgroundColor={ item.color }
            backgroundImage={ item.backgroundImage }
          ></Cell>
        )) }
      </Parent>
    </>
  );
}

export default App;
