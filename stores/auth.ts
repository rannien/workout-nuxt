import axios from 'axios';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref();
  const jwt = ref('');

  function login(identifier: string, password: string) {
    axios
      .post('http://localhost:1337/api/auth/local', {
        identifier: identifier,
        password: password,
      })
      .then((response) => {
        user.value = response.data.user;
        jwt.value = response.data.jwt;
        navigateTo('/dashboard');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  }

  function logout() {
    user.value = undefined;
    jwt.value = '';
    navigateTo('/login');
  }

  return { user, jwt, login, logout };
});
