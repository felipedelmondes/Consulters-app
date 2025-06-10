import React, { useState } from 'react';
import './CruipOpen.css';
import ApiService from './ApiService';

function CruipOpenLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Substitua a URL abaixo pela URL da sua API
      // const response = await fetch('SUA_URL_DA_API/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password })
      // });
      // if (!response.ok) {
      //   throw new Error('Usuário ou senha inválidos');
      // }
      // const data = await response.json();
      // onLogin(data);
      const data = await ApiService.login(username, password);
      onLogin(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cruip-container">
      <div className="cruip-card">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="cruip-logo" style={{ borderRadius: '8px' }} />
        <div className="cruip-title">Entrar</div>
        <div className="cruip-subtitle">Acesse sua conta para continuar</div>
        <form onSubmit={handleSubmit} className="cruip-form" style={{ width: '100%' }}>
          <label htmlFor="username" />
          <input
            id="username"
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password" />
          <input
            id="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CruipOpenLogin;
