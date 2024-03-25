<script lang="ts" setup>
import Card from "primevue/card";

defineOptions({
  inheritAttrs: false
});

const preset = {
  root: {
    class: ['rounded-md', 'shadow', 'bg-surface dark:bg-surface-dark', 'text-content dark:text-white']
  },
  body: {
    class: 'p-5'
  },
  title: {
    class: 'font-bold mb-2 pb-2 border-b'
  },
  subtitle: {
    class: ['font-normal', 'mb-2', 'text-surface-600 dark:text-surface-0/60']
  },
  content: {
    class: 'py-5'
  },
  footer: {
    class: 'pt-5'
  }
}


</script>

<template>
  <Card :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" v-bind="$attrs">
    <template #title>
      <slot name="title"/>
    </template>
    <template #content>
      <slot name="content"/>
    </template>
  </Card>
</template>