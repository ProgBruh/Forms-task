<template>
  <button
    class="button"
    :class="{ 'button--disabled': disabled }"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>
