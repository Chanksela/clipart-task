<template>
	<header class="px-[16px] h-[80px] bg-white flex">
		<nav class="flex justify-between items-center w-full">
			<div><img :src="logo" alt="company logo" /></div>
			<div class="flex gap-2">
				<div test class="hidden sm:block sm:relative">
					<input
						type="text"
						name="search"
						class="bg-primary-light rounded-[64px] h-[48px] w-[224px] indent-[16px] text-black-900 outline-2 outline-primary"
					/>
					<div
						class="absolute top-0 right-0 mr-4 h-full flex justify-center items-center"
					>
						<img :src="searchIcon" alt="search icon" />
					</div>
				</div>
				<CircleIcon class="sm:hidden">
					<img :src="searchIcon" alt="search icon" />
				</CircleIcon>
				<CircleIcon @click="toggleHamburgerMenu">
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
	import MobileMenu from "./common/MobileMenu.vue";
	export default {
		name: "Navigation",
		components: { CircleIcon, MobileMenu },
		data() {
			return {
				logo,
				searchIcon,
				hamburgerIcon,
				fb,
				inst,
				mobileMenuOpen: false,
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
		methods: {
			toggleHamburgerMenu() {
				this.mobileMenuOpen = !this.mobileMenuOpen;
			},
		},
	};
</script>
