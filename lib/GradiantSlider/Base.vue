<script setup>
import Slider from 'primevue/slider';
import {ref, watch} from "vue";


const colorFrom = defineModel('colorFrom')
const colorTo = defineModel('colorTo')
const colors = defineModel('colors')


const gradiant = ref()
//gradiant.value = `linear-gradient(90deg, hsl(0,100%,50%), hsl(${colorTo.value},100%,50%))`

const createGradiant = () => {
  gradiant.value = `linear-gradient(90deg`
  for (const color of colors.value) {
    gradiant.value += ',' + color
  }
  gradiant.value += ")"
}

createGradiant()

watch(colors, (newColor) => {
  createGradiant()
  console.log(gradiant.value + newColor)
})

defineOptions({
  inheritAttrs: false
});

defineProps();


const preset = {
  root: ({props}) => ({
    class: [
      'relative',
      // Size
      {'h-5 w-60 rounded': props.orientation === 'horizontal', 'w-1 h-56': props.orientation === 'vertical'},
      // Shape
      'border-0',
      // Colors

      // States
      {'opacity-60 select-none pointer-events-none cursor-default': props.disabled}
    ]
  }),
  range: ({props}) => ({
    class: [
      // Position
      'block absolute',
      {
        'top-0 left-0': props.orientation === 'horizontal',
        'bottom-0 left-0': props.orientation === 'vertical'
      },
      //Size
      {
        'h-full': props.orientation === 'horizontal',
        'w-full': props.orientation === 'vertical'
      },
      // Colors
      'bg-primary-500 dark:bg-primary-400'
    ]
  }),
  handle: ({props}) => ({
    class: [
      'block',
      // Size
      'h-[1.143rem]',
      'w-[1.143rem]',
      {
        'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation === 'horizontal',
        'left-[50%] mb-[-0.5715rem] ml-[-0.5715rem]': props.orientation === 'vertical'
      },
      // Shape
      'rounded-full',
      'border-2',
      // Colors
      'bg-primary dark:bg-primary',
      'border-primary-500 dark:border-primary-400',
      // States
      'hover:bg-primary-500 hover:border-primary-500',
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring',
      'ring-primary-400/50 dark:ring-primary-300/50',
      // Transitions
      'transition duration-200',
      // Misc
      'cursor-grab',
      'touch-action-none'
    ]
  }),
  starthandler: ({props}) => ({
    class: [
      'block',
      // Size
      'h-[1.143rem]',
      'w-[1.143rem]',
      {
        'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation === 'horizontal',
        'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation === 'vertical'
      },
      // Shape
      'rounded-full',
      'border-2',
      // Colors
      'bg-surface-0 dark:bg-surface-600',
      'border-primary-500 dark:border-primary-400',
      // States
      'hover:bg-primary-500 hover:border-primary-500',
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring',
      'focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',
      // Transitions
      'transition duration-200',
      // Misc
      'cursor-grab',
      'touch-action-none'
    ]
  }),
  endhandler: ({props}) => ({
    class: [
      'block',
      // Size
      'h-[1.143rem]',
      'w-[1.143rem]',
      {
        'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation === 'horizontal',
        'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation === 'vertical'
      },
      // Shape
      'rounded-full',
      'border-2',
      // Colors
      'bg-surface-0 dark:bg-surface-600',
      'border-primary-500 dark:border-primary-400',
      // States
      'hover:bg-primary-500 hover:border-primary-500',
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring',
      'focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',
      // Transitions
      'transition duration-200',
      // Misc
      'cursor-grab',
      'touch-action-none'
    ]
  })
};


</script>

<template>

  <Slider :class="$style.gradiant" :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }"
          v-bind="$attrs"/>

  <button @click="colorTo = 44">test</button>

  {{ colors }}
</template>

<style module>
.gradiant {
  background: rgb(2, 0, 36);
  background: v-bind("gradiant")
}
</style>