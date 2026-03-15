import type { Directive } from 'vue'

const THRESHOLD = 0.03

const vScrollEnd: Directive<HTMLElement, () => void> = {
  mounted(el, binding) {
    const handler = () => {
      const remaining = el.scrollHeight - el.scrollTop - el.clientHeight
      const percentRemaining = remaining / el.scrollHeight

      if (percentRemaining < THRESHOLD) {
        binding.value()
      }
    }

    el.addEventListener('scroll', handler)
    el._scrollEndHandler = handler
  },


  beforeUnmount(el) {
    el.removeEventListener('scroll', el._scrollEndHandler as any)
    delete el._scrollEndHandler
  }
}

export default vScrollEnd
