import React from 'react';
import NudgeList from './components/NudgeList';
import AddNudge from './components/AddNudge';

function App() {
  return (
    <div className="App">
      <h1>Nudge Engine</h1>
      <AddNudge />
      <NudgeList />
    </div>
  );
}

export default App;



