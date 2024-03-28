<template>
	<header class="sm:px-[56px] px-[16px] h-[80px] bg-white flex">
		<nav class="flex justify-between items-center w-full" ref="navigation">
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
			<div class="flex items-center gap-2 min-w-[312px] justify-end">
				<div class="hidden sm:flex sm:items-center sm:gap-2 mr-[16px]">
					<SocialMedias />
					<div test class="block relative">
						<input
							type="text"
							name="search"
							:value="searchText"
							@focus="showPlaceholder = false"
							@blur="showPlaceholder = !searchText"
							class="bg-primary-light rounded-[64px] h-[48px] w-[224px] indent-[16px] text-black-900 placeholder:text-black-900 outline-2 outline-primary"
						/>
						<div
							class="absolute top-0 right-0 mr-4 h-full flex justify-center items-center"
						>
							<img :src="searchIcon" alt="search icon" />
						</div>
						<div
							v-if="showPlaceholder"
							class="absolute top-0 left-0 ml-4 h-full flex items-center text-black-900"
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
			checkOverflow() {
				const headerElement = this.$refs.navigation;
				if (headerElement.scrollWidth > headerElement.offsetWidth) {
					this.otherCategories.push(this.categories.pop());
				} else {
					this.categories.push(this.otherCategories.pop());
				}
			},
		},
		mounted() {
			this.checkOverflow();
			window.addEventListener("resize", this.checkOverflow); // Listen for resize events
		},
		beforeUnmount() {
			window.removeEventListener("resize", this.checkOverflow); // Remove resize event listener
		},
	};
</script>
