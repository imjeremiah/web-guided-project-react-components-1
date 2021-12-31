/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from "react";

function Playground() {
  const [healthPoints, setHealthPoints] = useState(100);
  const [spinnerOn, setSpinnerOn] = useState(false);

  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The Spinner is {spinnerOn ? 'ON' : 'OFF'}</h3>
        <button onClick={() => setSpinnerOn(false)}>Close</button>
      </div>
    )
  }

  const decreaseHealth = () => {
    setHealthPoints(healthPoints - 1)
  }
  
  return (
    <div>
      <h1 style={{color: 'red'}}>Hello from the Playground component!</h1>
      <span>Current Health: {healthPoints}</span>
      <p>{healthPoints > 50 ? "You're in good health" : "You're hurt."}</p>
      <button onClick={decreaseHealth}>Decrease Health</button>
      <div>
        <button onClick={() => setSpinnerOn(true)}>Open</button>
      </div>
    </div>
  )
}

export default Playground;