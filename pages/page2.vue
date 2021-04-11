<template>
  <div>
    <p>{{ state.message }}</p>
    <p>{{ state.code }}</p>
    <NuxtLink to="/">go to home</NuxtLink>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useError } from '~/composables/useError'

export default defineComponent({
  layout: 'auth',
  setup() {
    const { state } = useError()
    return {
      state,
    }
  },
})
</script>
