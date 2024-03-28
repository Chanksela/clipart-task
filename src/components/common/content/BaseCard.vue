<template>
  <div
    class="my-6 w-full overflow-y-scroll rounded-[20px] px-4 pb-6 pt-3 shadow-small lg:overflow-y-hidden"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BaseCard",
};
</script>
