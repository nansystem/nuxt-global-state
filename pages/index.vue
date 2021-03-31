<template>
  <p>globalKey: {{ globalKey }}</p>
</template>

<script>
import { defineComponent, inject } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const globalKey = inject('globalKey')

    console.log(globalKey)
    return {
      globalKey,
    }
  },
})
</script>
