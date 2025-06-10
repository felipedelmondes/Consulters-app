import React, { useState } from 'react';
import './App.css';
import CruipOpenLogin from './CruipOpenLogin';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <CruipOpenLogin onLogin={setUser} />
      ) : (
        <header className="App-header">
          <p>Bem-vindo, {user.username || 'usuário'}!</p>
          <button onClick={() => setUser(null)}>Sair</button>
        </header>
      )}
    </div>
  );
}

export default App;
