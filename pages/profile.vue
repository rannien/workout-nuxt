<script setup lang="ts">
import { storeToRefs } from 'pinia';

definePageMeta({ middleware: 'auth' });
const { user } = storeToRefs(useAuthStore());
</script>
<template>
  <section class="bg-white">
    <div class="max-w-2xl px-4 py-4 mx-auto lg:py-8">
      <h2 class="mb-4 text-xl font-bold text-gray-900">Profile</h2>
      <form action="#" v-if="user">
        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              :value="user.email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
              required
            />
          </div>
          <div class="w-full">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
              required
            />
          </div>
          <div class="w-full">
            <label
              for="password_confirmation"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Password Confirmation</label
            >
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
