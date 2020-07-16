import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

function App() {

  const [reveal, setReveal] = useState(false);

  const called = () => {
    setReveal(true);
    console.log('cliked');
  };




  const cells = [
    [{
      icon: "home",
      x: 0,
      y: -160
    },
    {
      icon: "home",
      x: 0,
      y: -320
    },
    {
      icon: "home",
      x: 0,
      y: -480
    }], [
      {
        icon: "mail",
        x: 140,
        y: -80
      },
      {
        icon: "mail",
        x: 280,
        y: -160
      },
      {
        icon: "mail",
        x: 420,
        y: -240
      }
    ],
    [{
      icon: "notifications",
      x: 140,
      y: 80
    },
    {
      icon: "notifications",
      x: 280,
      y: 160
    },
    {
      icon: "notifications",
      x: 420,
      y: 240
    }
    ],
    [{
      icon: "add_a_photo",
      x: 0,
      y: 160
    },
    {
      icon: "add_a_photo",
      x: 0,
      y: 320
    },
    {
      icon: "add_a_photo",
      x: 0,
      y: 480
    }
  ],
    [{
      icon: "videocam",
      x: -140,
      y: 80
    },
    {
      icon: "videocam",
      x: -280,
      y: 160
    },
    {
      icon: "videocam",
      x: -420,
      y: 240
    }
  ],
    [
      {
      icon: "search",
      x: -140,
      y: -80
    },
    {
      icon: "search",
      x: -280,
      y: -160
    },
    {
      icon: "search",
      x: -420,
      y: -240
    }
  ]
  ];

  return (
    <div className="App">
      <div className="container" onClick={ called }>
        <div className="toggle" id="toggle">
          <span className="material-icons" id="add">
            add
        </span>
        </div>
      </div>
      <CSSTransition
        in={ reveal }
        timeout={ 200 }
        classNames="alert"
        unmountOnExit
      >
        <div className="menu">
          { cells.map((item, index) => (
            item.map((itm, index) => (
              <div className="item" key={ index } style={ { transform: `translate(${itm.x}px, ${itm.y}px)` } }>
                <a href="link">
                  <i className="material-icons">{ itm.icon }</i>
                </a>
              </div>
            ))
          )) }
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
