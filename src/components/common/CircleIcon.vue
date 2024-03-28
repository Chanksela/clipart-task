<template>
  <div
    class="flex items-center justify-center rounded-full bg-primary-light"
    :style="{ width: size, height: size }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      default: "48px",
    },
  },
};
</script>
