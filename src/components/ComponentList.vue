<script lang="ts" setup>
import {Button, GradiantSlider, InputSwitch, Slider} from "../../lib/index.ts";
import {ref, watch} from "vue";

const toggleState = ref(true)
const sliderValue = ref(50)

const colors = ref([
  {"hsl": 'hsl(' + sliderValue.value + ',100%,50%)'},
  {"hsl": 'hsl(90,100%,50%)'},
  {"hsl": 'hsl(90,100%,100%)'},
])

watch(sliderValue, () => {
  colors.value[0].hsl = 'hsl(' + sliderValue.value + ',100%,50%)'
})
</script>

<template>
  <div class="flex gap-4 ">
    <Card>
      <template #title>Slider</template>
      <template #content>
        <div class="mb-8">
          <Slider v-model="sliderValue"/>
          <div class="mt-2 font-bold">
            {{ sliderValue }}
          </div>
        </div>
      </template>
    </Card>

    <Card>
      <template #title>Gradiant Slider</template>
      <template #content>
        <div class="mb-8">
          <GradiantSlider v-model:colors="colors" v-model:count="sliderValue" :max="255"/>
          <div class="mt-2 font-bold">
            {{ sliderValue }}
          </div>
        </div>
      </template>
    </Card>


    <Card>
      <template #title>Buttons</template>
      <template #content>
        <Button label="Default Button"/>
        <Button label="Link Button" link/>
      </template>
    </Card>

    <Card>
      <template #title>Toggle</template>
      <template #content>
        <InputSwitch v-model="toggleState" inputId="primary" label="Primary"/>
      </template>
    </Card>

  </div>
</template>