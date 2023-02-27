<script setup lang="ts">
useHead({
  bodyAttrs: { class: ['dark:bg-gray-700'] },
});

const days = [
  {
    training: [
      {
        icon: '',
        label: 'Compound',
        workout: [
          {
            name: 'Barbell Squats',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: '',
        label: 'Superset',
        workout: [
          {
            name: 'Barbell Curls',
            repetition: '4x10',
          },
          {
            name: 'Triceps Cable Extension',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: '',
        label: 'Compound Set',
        workout: [
          {
            name: 'Pullovers',
            repetition: '4x10',
          },
          {
            name: 'Chest Dips (body weight)',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: '',
        label: 'Superset',
        workout: [
          {
            name: 'Seated V-Grip Row',
            repetition: '4x10',
          },
          {
            name: 'Dumbbell Lateral Raise',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: '',
        label: 'Simple',
        workout: [
          {
            name: 'Hanging Leg Raise',
            repetition: '3x15',
          },
        ],
      },
    ],
  },
];
</script>
<template>
  <section class="dark:bg-gray-700">
    <div
      v-for="(day, index) in days"
      class="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6"
    >
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Day {{ index + 1 }}
        </h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">Full Body</p>
      </div>
      <div
        class="space-y-8 md:grid md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 md:gap-8 md:space-y-0"
      >
        <div v-for="set in day.training">
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-100 lg:h-12 lg:w-12 dark:bg-lime-900"
          >
            <svg
              class="w-5 h-5 text-lime-600 lg:w-6 lg:h-6 dark:text-lime-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h4 class="text-sm mb-2 text-gray-500 dark:text-gray-400">
            {{ set.label }}
          </h4>

          <div v-for="exercise in set.workout" class="mb-4">
            <h3 class="mb-2 text-xl font-bold dark:text-white">
              {{ exercise.name }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ exercise.repetition }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
