<template>
  <div>
    <p>{{ state.message }}</p>
    <p>{{ state.code }}</p>
    <button @click="clearError">clear error</button>
    <button @click="setInputError">set error</button>
    <NuxtLink to="/page2">go to page2</NuxtLink>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useError } from '~/composables/useError'

export default defineComponent({
  setup() {
    const { state, clearError, setError } = useError()

    const setInputError = () => {
      setError({ message: 'setup error', code: 'SETUP_ERROR' })
    }
    return {
      state,
      clearError,
      setInputError,
    }
  },
})
</script>
