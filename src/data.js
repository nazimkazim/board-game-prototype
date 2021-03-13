import { lightColor } from './colorUtils';
const { v4: uuidv4 } = require('uuid');

export const _cells = [
  {
    gridArea: '1/ 1 / 2 / 2',
    id: uuidv4(),
    move: false,
    /* topBorder: true,
    leftBorder: true,
    rightBorder:false,
    bottomBorder:true */
  }, {

    gridArea: '1 / 2 / 2 / 3',
    id: uuidv4(),
    move: false,
    color: lightColor,
    backgroundImage: 'https://res.cloudinary.com/nzmai/image/upload/v1615649677/board%20game%20assets/mystery.png'
    /* topBorder: true,
    leftBorder: true,
    rightBorder:true,
    bottomBorder:true */
  }, {

    gridArea: '1 / 3 / 2 / 4',
    id: uuidv4(),
    move: false,
    /* topBorder: true,
    leftBorder: false,
    rightBorder:true,
    bottomBorder:true */
  }, {

    gridArea: '1 / 4 / 2 / 5',
    id: uuidv4(),
    move: false,
    backgroundImage:'https://res.cloudinary.com/nzmai/image/upload/v1615651577/board%20game%20assets/random.png'
    /* topBorder: true,
    leftBorder: false,
    rightBorder:true,
    bottomBorder:true */
  }, {

    gridArea: '1 / 5 / 2 / 6',
    id: uuidv4(),
    move: false,
    /* topBorder: false,
    leftBorder: false,
    rightBorder:true,
    bottomBorder:true */
  }, {

    gridArea: '2 / 5 / 3 / 6',
    id: uuidv4(),
    move: false,
    /* topBorder: true,
    leftBorder: true,
    rightBorder:true,
    bottomBorder:true */
  }, {

    gridArea: '3 / 5 / 4 / 6',
    id: uuidv4(),
    move: false,
    /* topBorder: true,
    leftBorder: true,
    rightBorder:true,
    bottomBorder:true */
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