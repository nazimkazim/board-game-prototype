import styled from 'styled-components';
import { supplementaryColor } from './colorUtils';
import { breatheAnimation } from './StyledComponentsAnimation';

export const Parent = styled.div`
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

export const Cell = styled.div`
  grid-area:${props => props.gridArea};
  /* border-top:${props => props.topBorder && `2px solid black`};
  border-left:${props => props.leftBorder && `2px solid black`};
  border-right:${props => props.rightBorder && `2px solid black`};
  border-bottom:${props => props.bottomBorder && `2px solid black`}; */
  border:${props => props.move ? `3px solid ${supplementaryColor}` : `2px solid black`};
  height:calc(100vh / 5 - 10px); 
  width:calc(100vh / 5 );
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  -webkit-box-shadow: ${props => props.move && `10px 10px 5px 0px rgba(0,0,0,0.75)`};
  -moz-box-shadow: ${props => props.move && `10px 10px 5px 0px rgba(0,0,0,0.75)`};
  box-shadow: ${props => props.move && `10px 10px 5px 0px rgba(0,0,0,0.75)`};
  background:url(${props => props.backgroundImage && props.backgroundImage});
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'blue'};
  background-position: center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100px;
  animation-name: ${props => props.move && breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

export const Button = styled.div`
  position:absolute;
  min-width:30px;
  height:30px;
  top:2px;
  left:10px;
  background-color:red;
`;