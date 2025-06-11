import React, { useState } from 'react';
import './App.css';
import CruipOpenLogin from './CruipOpenLogin';
import Home from './Home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <CruipOpenLogin onLogin={setUser} />
      ) : (
        <Home onNavigate={() => {}} token={user.token} hash={user.hash} />
      )}
    </div>
  );
}

export default App;
