// src/ApiService.js

class ApiService {
  static API_BASE_URL = 'https://consultersit.up.railway.app/api'; // URL base da sua API

  

  static async login(username, senha) {
    const response = await fetch(`${this.API_BASE_URL}/Login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, senha })
    });
    if (!response.ok) {
      throw new Error('Usuário ou senha inválidos');
    }
    const data = await response.json();
    // Retorna o objeto padronizado para o App
    return {
      username,
      token: data.jwt,
      mensagem: data.mensagem,
      hash: data.hash,
      expire: data.expire
    };
  }

  // Adicione outros métodos da sua API aqui, exemplo:
  static async getUsuarios(token, hash) {
    const response = await fetch(`${this.API_BASE_URL}/GetUsuarios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'hash': hash
      }
    });
    if (!response.ok) throw new Error('Erro ao buscar usuários');
    return response.json();
  }
}

export default ApiService;
