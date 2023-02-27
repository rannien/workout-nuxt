<script setup lang="ts">
useHead({
  bodyAttrs: { class: ['dark:bg-gray-700'] },
});

const days = [
  [
    [
      {
        name: 'Bench Press',
        repetation: '4x10',
      },
      {
        name: 'Bent Over Dumbbell Reverse Fly',
        repetation: '4x10',
      },
    ],
    [
      {
        name: 'Pullovers',
        repetation: '4x10',
      },
      {
        name: 'Biceps Curls',
        repetation: '4x10',
      },
    ],
    [
      {
        name: 'Seated Cable Rows',
        repetation: '4x10',
      },
      {
        name: 'Chest Dips (body weight)',
        repetation: '4x10',
      },
    ],
    [
      {
        name: 'Hanging Leg Raise',
        repetation: '3x15',
      },
    ],
  ],
  [
    [
      {
        name: 'Barbell Squats',
        repetation: '4x10',
      },
      {
        name: 'Deadlifts',
        repetation: '4x10',
      },
    ],
    [
      {
        name: 'Walking Lunges',
        repetation: '4x10 step (each)',
      },
      {
        name: 'Bulgarian Split Squats',
        repetation: '4x10 (each)',
      },
    ],
    [
      {
        name: 'Seated Hamstring Curls',
        repetation: '4x10',
      },
      {
        name: 'Standing Calf Raises',
        repetation: '4x10',
      },
    ],
    [
      {
        name: 'Plank',
        repetation: '3x60 sec',
      },
    ],
  ],
  [
    [
      {
        name: 'Incline Barbell Press',
        repetation: '4x10',
      },
      {
        name: 'Dumbbell Fly',
        repetation: '4x10',
      },
    ],
    [
      {
        name: 'Pull Ups',
        repetation: '4x10 step',
      },
      {
        name: 'Dumbbell Lateral Raise',
        repetation: '4x10',
      },
    ],
    [
      {
        name: 'EZ-bar Skull Crusher',
        repetation: '4x10',
      },
      {
        name: 'Face Pulls (rope)',
        repetation: '4x10',
      },
    ],
    [
      {
        name: 'Russian Twist',
        repetation: '3x15',
      },
    ],
  ],
];
</script>
<template>
  <section class="dark:bg-gray-700">
    <div
      v-for="(exercises, index) in days"
      class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
    >
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Day {{ index + 1 }}
        </h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">Upper Body</p>
      </div>
      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0"
      >
        <div v-for="superset in exercises">
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
          <div v-for="exercise in superset" class="mb-4">
            <h3 class="mb-2 text-xl font-bold dark:text-white">
              {{ exercise.name }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ exercise.repetation }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
