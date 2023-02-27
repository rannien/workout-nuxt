<script setup lang="ts">
import {
  BoltIcon,
  FireIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from '@heroicons/vue/24/solid';

useHead({
  bodyAttrs: { class: ['dark:bg-gray-700'] },
});

const days = [
  {
    training: [
      {
        icon: RocketLaunchIcon,
        label: 'Compound',
        workout: [
          {
            name: 'Barbell Squats',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: BoltIcon,
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
        icon: FireIcon,
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
        icon: BoltIcon,
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
        icon: LightBulbIcon,
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
  {
    training: [
      {
        icon: RocketLaunchIcon,
        label: 'Compound',
        workout: [
          {
            name: 'Deadlift',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: BoltIcon,
        label: 'Superset',
        workout: [
          {
            name: 'Incline Barbell Press',
            repetition: '4x10',
          },
          {
            name: 'Dumbbell Shrugs',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: FireIcon,
        label: 'Compound Set',
        workout: [
          {
            name: 'Pull Ups',
            repetition: '4x10',
          },
          {
            name: 'Bent Over Dumbbell Reverse Fly',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: BoltIcon,
        label: 'Superset',
        workout: [
          {
            name: 'Concentration Curls',
            repetition: '4x10',
          },
          {
            name: 'Single Arm French Press',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: LightBulbIcon,
        label: 'Simple',
        workout: [
          {
            name: 'Standing Calf Raises',
            repetition: '3x15',
          },
        ],
      },
    ],
  },
  {
    training: [
      {
        icon: RocketLaunchIcon,
        label: 'Compound',
        workout: [
          {
            name: 'Barbell Bench Press',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: FireIcon,
        label: 'Compound Set',
        workout: [
          {
            name: 'Bent Over Rows',
            repetition: '4x10',
          },
          {
            name: 'Overhead Press',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: BoltIcon,
        label: 'Superset',
        workout: [
          {
            name: 'EZ-bar Skull Crusher',
            repetition: '4x10',
          },
          {
            name: 'Chin Ups',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: BoltIcon,
        label: 'Superset',
        workout: [
          {
            name: 'Bulgarian Split Squats',
            repetition: '4x10',
          },
          {
            name: 'Farmer Walks',
            repetition: '4x10',
          },
        ],
      },
      {
        icon: LightBulbIcon,
        label: 'Simple',
        workout: [
          {
            name: 'Russian Twist',
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
            <Component
              :title="set.label"
              :is="set.icon"
              class="w-5 h-5 text-lime-600 lg:w-6 lg:h-6 dark:text-lime-300"
            />
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
