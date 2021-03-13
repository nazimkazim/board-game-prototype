import { keyframes } from 'styled-components';

export const breatheAnimation = keyframes`
 0% { 
   -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
   -moz-box-shadow:10px 10px 5px 0px rgba(0,0,0,0.75);
   box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); 
   opacity: 1
  }
  30% { 
    -webkit-box-shadow: 15px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow:15px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 10px 5px 0px rgba(0,0,0,0.75); 
    opacity: 0.8
   }
   60% { 
    -webkit-box-shadow: 20px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow:20px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 20px 10px 5px 0px rgba(0,0,0,0.75); 
    opacity: 0.6;
   }
 100% { 
    -webkit-box-shadow: 30px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 30px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 30px 5px 0px rgba(0,0,0,0.75);
    opacity: 0.4; 
  }
`;