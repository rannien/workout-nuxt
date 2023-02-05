import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref();
  const jwt = ref('');

  function logout() {
    user.value = undefined;
    jwt.value = '';
  }

  return { user, jwt, logout };
});
