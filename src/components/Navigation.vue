<template>
  <header class="flex h-[80px] bg-white px-[16px] sm:px-[56px]">
    <nav class="flex w-full items-center justify-between" ref="navigation">
      <a href="/"
        ><img
          :src="logo"
          alt="company logo"
          class="min-w-[137px] max-w-[137px] xl:min-w-[167px] xl:max-w-[167px]"
      /></a>
      <DesktopNavigation
        :overflow="overflow"
        :categories="categories"
        :otherCategories="otherCategories"
      />
      <div class="flex items-center justify-end gap-2 md:min-w-[312px]">
        <div class="mr-[16px] hidden sm:flex sm:items-center sm:gap-2">
          <SocialMedias />
          <div test class="relative block">
            <input
              type="text"
              name="search"
              :value="searchText"
              @focus="showPlaceholder = false"
              @blur="showPlaceholder = !searchText"
              class="h-[48px] w-[224px] rounded-[64px] bg-primary-light indent-[16px] text-black-900 outline-2 outline-primary placeholder:text-black-900"
            />
            <div
              class="absolute right-0 top-0 mr-4 flex h-full items-center justify-center"
            >
              <img :src="searchIcon" alt="search icon" />
            </div>
            <div
              v-if="showPlaceholder"
              class="absolute left-0 top-0 ml-4 flex h-full items-center text-black-900"
            >
              {{ placeholderText }}
            </div>
          </div>
        </div>

        <CircleIcon class="sm:hidden">
          <img :src="searchIcon" alt="search icon" />
        </CircleIcon>
        <CircleIcon @click="toggleHamburgerMenu" class="lg:hidden">
          <img :src="hamburgerIcon" alt="hamburger menuicon" />
        </CircleIcon>
      </div>
    </nav>
  </header>
  <MobileMenu v-if="mobileMenuOpen" />
</template>

<script>
// icons
import logo from "../assets/svg/logo.svg";
import searchIcon from "../assets/svg/search.svg";
import hamburgerIcon from "../assets/svg/hamburger.svg";
import fb from "../assets/svg/fb.svg";
import inst from "../assets/svg/inst.svg";

import CircleIcon from "./common/CircleIcon.vue";
import SocialMedias from "./common/SocialMedias.vue";
import MobileMenu from "./common/MobileMenu.vue";
import DesktopNavigation from "./common/DesktopNavigation.vue";
export default {
  name: "Navigation",
  components: { CircleIcon, MobileMenu, SocialMedias, DesktopNavigation },
  data() {
    return {
      logo,
      searchIcon,
      hamburgerIcon,
      fb,
      inst,
      mobileMenuOpen: false,
      showPlaceholder: true,
      searchText: "",
      overflow: false,
      test: "",
      categories: [
        "პოლიტიკა",
        "საზოგადოება",
        "სამართალი",
        "ბიზნესი & ეკონომიკა",
        "ბიზნესი & ეკონომიკა",
        "ეკონომიკა",
        "რელიგია",
      ],
      otherCategories: [],
    };
  },
  computed: {
    placeholderText() {
      return this.searchText ? "" : "ძიება";
    },
  },
  methods: {
    toggleHamburgerMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    debounce(func, delay) {
      let timer;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    },
    checkOverflow() {
      const headerElement = this.$refs.navigation;
      if (headerElement.scrollWidth > headerElement.offsetWidth) {
        this.otherCategories.push(this.categories.pop());
      } else {
        this.categories.push(this.otherCategories.pop());
      }
      console.log(headerElement.scrollWidth, headerElement.offsetWidth);
    },
  },
  mounted() {
    this.checkOverflow();
    window.addEventListener("resize", this.debounce(this.checkOverflow, 100));
  },
  beforeUnmount() {
    window.removeEventListener(
      "resize",
      this.debounce(this.checkOverflow, 100),
    );
  },
};
</script>
