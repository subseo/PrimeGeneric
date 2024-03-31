<script lang="ts" setup>
import {Button, GradiantSlider, InputSwitch, Slider} from "../../lib/index.ts";
import {reactive, ref, watch} from "vue";

const toggleState = ref(true)
const sliderValue = ref(300)

const colors = reactive([
  {hsl: 'hsl(60,100%,50%)'},
  {hsl: 'hsl(60,100%,50%)'},
  {hsl: 'hsl(120,100%,50%)'},
  {hsl: 'hsl(180,100%,50%)'},
  {hsl: 'hsl(240,100%,50%)'},
  {hsl: 'hsl(300,100%,50%)'},
  {hsl: 'hsl(360,100%,50%)'},
])

watch(sliderValue, () => {
  colors[0].hsl = `hsl(${sliderValue.value},100%,50%)`
})

</script>

<template>
  <div class="flex gap-4 ">
    <Card>
      <template #title>Slider</template>
      <template #subtitle>TEST</template>
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
          <GradiantSlider v-model:colors="colors" v-model:count="sliderValue" :max="360"/>
          <div :style="'background: hsl('+sliderValue + ',100%,50%)'"
               class="mt-2 font-bold rounded text-xs p-1 text-white">
            Example: {{ sliderValue }}
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