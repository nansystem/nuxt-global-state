import { Plugin } from '@nuxt/types'
import { onGlobalSetup, provide } from '@nuxtjs/composition-api'

const globalStatePlugin: Plugin = () => {
  onGlobalSetup(() => {
    provide('globalKey', true)
  })
}

export default globalStatePlugin
