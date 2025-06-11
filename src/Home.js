import React, { useState } from 'react';
import './Home.css';
import ApiService from './ApiService';

function Home({ onNavigate, token, hash }) {
  const [selected, setSelected] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const handleNavigate = async (option) => {
    setSelected(option);
    if (onNavigate) onNavigate(option);
    if (option === 'listar') {
      setLoading(true);
      setErro(null);
      try {
        const lista = await ApiService.getUsuarios(token, hash);
        setUsuarios(lista);
      } catch (e) {
        setErro('Erro ao buscar usuários');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li className={selected === 'cadastrar' ? 'active' : ''} onClick={() => handleNavigate('cadastrar')}>Cadastrar Novo Usuário</li>
          <li className={selected === 'listar' ? 'active' : ''} onClick={() => handleNavigate('listar')}>Listar Usuários</li>
        </ul>
      </aside>
      <main className="main-content">
        {selected === 'cadastrar' && (
          <div>
            <h1>Cadastrar Novo Usuário</h1>
            <p>Formulário de cadastro aqui...</p>
          </div>
        )}
        {selected === 'listar' && (
          <div>
            <h1>Listar Usuários</h1>
            {loading && <p>Carregando...</p>}
            {erro && <p style={{color: 'red'}}>{erro}</p>}
            {!loading && !erro && (
              <ul>
                {usuarios.length === 0 && <li>Nenhum usuário encontrado.</li>}
                {usuarios.map((u, idx) => (
                  <li key={u.id || idx}>{u.username || u.nome || JSON.stringify(u)}</li>
                ))}
              </ul>
            )}
          </div>
        )}
        {!selected && (
          <>
            <h1>Bem-vindo à Home!</h1>
            <p>Selecione uma opção no menu ao lado.</p>
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
