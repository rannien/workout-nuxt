export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (authStore.jwt === '') {
    return navigateTo('/login');
  }
});
