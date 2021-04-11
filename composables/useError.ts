import { readonly, ref } from "@vue/composition-api";

interface Error {
  message: string
  code: string
}

const state = ref<Error>({
  message: '認証エラーです',
  code: 'AUTHENTICATION_ERROR',  
})

const setError = (error: Error) => {
  state.value = error
}

const clearError = () => {
  state.value = {message:'', code:''}
}

export function useError() {
  return {
    state: readonly(state),
    setError,
    clearError,
  }
}
export type ErrorStateType = ReturnType<typeof useError>
