<script lang="ts" setup>
import ComponentList from "./components/ComponentList.vue";
import {ref} from "vue";
import {InputSwitch} from "../lib/main";

const darkMode = ref(false)

</script>

<template>
  <div
      :class="{
        'dark bg-black text-white': darkMode,
        'light bg-white text-black': !darkMode
      }"
      class="flex h-full w-full">

    <div class="flex  flex-col w-full h-full p-8 ">
      <InputSwitch v-model="darkMode" label="Dark mode"/>
      <ComponentList/>
    </div>
  </div>
</template>
