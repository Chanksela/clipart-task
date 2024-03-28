<template>
  <div class="flex justify-center gap-2">
    <CircleIcon size="32px">
      <img :src="fb" alt="facebook icon" />
    </CircleIcon>
    <CircleIcon size="32px">
      <img :src="inst" alt="instagram icon" />
    </CircleIcon>
  </div>
</template>
<script>
import fb from "../../assets/svg/fb.svg";
import inst from "../../assets/svg/inst.svg";

import CircleIcon from "./CircleIcon.vue";
export default {
  name: "Socialmedias",
  components: { CircleIcon },
  data() {
    return {
      fb,
      inst,
    };
  },
};
</script>
