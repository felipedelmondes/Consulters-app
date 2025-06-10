// src/ApiService.js

class ApiService {
  static API_BASE_URL = 'https://consultersit.up.railway.app/api'; // URL base da sua API

  

  static async login(username, password) {
    const response = await fetch(`${this.API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
      throw new Error('Usuário ou senha inválidos');
    }
    return response.json();
  }

  // Adicione outros métodos da sua API aqui, exemplo:
  // static async getUserProfile(token) {
  //   const response = await fetch(`${this.API_BASE_URL}/profile`, {
  //     headers: { 'Authorization': `Bearer ${token}` }
  //   });
  //   if (!response.ok) throw new Error('Erro ao buscar perfil');
  //   return response.json();
  // }
}

export default ApiService;
