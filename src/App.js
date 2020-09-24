import React from 'react';
import User from './User';

function App() {
  return (
    <div className="App">
      <User name="Tabish Adnan" age={20} education="Intermediate" hobbies={["Coding", "Playing", "Reading Books"]} />
      <User name="Muneeb Khan" age={22} education="BSCS" hobbies={["Chess", "Archery", "Paintball", "Photography"]} />
    </div>
  );
}

export default App;
