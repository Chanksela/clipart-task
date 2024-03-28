<template>
  <ul ref="list" class="ml-[32px] hidden items-center gap-[32px] lg:flex">
    <li
      v-for="category in categories"
      class="text-headline cursor-default font-medium leading-[24px] tracking-text text-black-600 hover:text-primary"
    >
      {{ category }}
    </li>
    <div
      class="text-headline relative ml-[32px] w-[180px] cursor-default font-medium leading-[24px] tracking-text text-black-600"
    >
      <span @click="toggleOtherCategories" class="hover:text-primary">
        სხვა</span
      >
      <ul
        class="absolute z-20 mt-2.5 flex w-full flex-col gap-4 rounded-2xl bg-white py-4 shadow-big"
        v-if="showOtherCategories"
      >
        <li
          class="bottom-0 left-0 list-none pl-5 hover:text-primary"
          v-for="otherCategory in otherCategories"
        >
          {{ otherCategory }}
        </li>
      </ul>
    </div>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    overflow: {
      type: Boolean,
      required: true,
    },
    otherCategories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showOtherCategories: false,
    };
  },
  methods: {
    toggleOtherCategories() {
      this.showOtherCategories = !this.showOtherCategories;
    },
  },
};
</script>
