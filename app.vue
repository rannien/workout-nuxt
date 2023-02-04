<script setup lang="ts">
const counter = useCounterStore();
</script>

<template>
  <div>
    <NuxtWelcome />
    <button @click="counter.increment()">Click me: {{ counter.count }}</button>
  </div>
</template>
