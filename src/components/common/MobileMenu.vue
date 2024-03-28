<template>
  <div class="my-10 flex-grow">
    <ol class="flex list-none flex-col gap-8 px-[16px]">
      <li
        v-for="category in categories"
        class="cursor-default text-headline-mobile font-medium leading-[24px] tracking-text text-black-600 hover:text-primary"
      >
        {{ category }}
      </li>
    </ol>
    <SocialMedias />
  </div>
</template>
<script>
import fb from "../../assets/svg/fb.svg";
import inst from "../../assets/svg/inst.svg";

import CircleIcon from "./CircleIcon.vue";
import SocialMedias from "./SocialMedias.vue";
export default {
  name: "MobileMenu",
  components: { CircleIcon, SocialMedias },
  data() {
    return {
      fb,
      inst,
      categories: [
        "პოლიტიკა",
        "საზოგადოება",
        "სამართალი",
        "ბიზნესი & ეკონომიკა",
        "ბიზნესი & ეკონომიკა",
        "ეკონომიკა",
        "რელიგია",
      ],
    };
  },
};
</script>
