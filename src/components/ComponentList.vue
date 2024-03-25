<script lang="ts" setup>
import {Button, GradiantSlider, InputSwitch, Slider} from "../../lib/index.ts";
import {ref, watch} from "vue";

const toggleState = ref(true)
const value = ref(50)

const colorFrom = ref('#ff3300')
const colorTo = ref('#fff333')

const colors = ref([
  'hsl(' + value.value + ',100%,50%)',
  'hsl(90,100%,50%)',
  'hsl(90,100%,100%)',
  'hsl(140,100%,50%)'
])

watch(value, () => {
  //createGradiant()
  colors.value[0] = 'hsl(' + value.value + ',100%,50%)'
})
</script>

<template>
  <div class="flex gap-4 ">
    <Card>
      <template #title>Slider</template>
      <template #content>
        {{ value }}
        Slider: {{ value }}
        <div class="mb-8">
          <Slider v-model="value"/>
        </div>

        <GradiantSlider v-model="value" v-model:colorFrom="colorFrom"
                        v-model:colorTo="value" v-model:colors="colors" :max="255" :min="0"/>

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