<template>
	<header class="px-[16px] h-[80px] bg-white flex">
		<nav class="flex justify-between items-center w-full">
			<div><img :src="logo" alt="" /></div>
			<div class="flex gap-[8px]">
				<CircleIcon> <img :src="searchIcon" alt="" /> </CircleIcon>
				<CircleIcon> <img :src="hamburgerIcon" alt="" /> </CircleIcon>
			</div>
		</nav>
	</header>
</template>
<script>
	import logo from "../assets/svg/logo.svg";
	import searchIcon from "../assets/svg/search.svg";
	import hamburgerIcon from "../assets/svg/hamburger.svg";

	import CircleIcon from "./common/CircleIcon.vue";
	export default {
		name: "Navigation",
		components: { CircleIcon },
		data() {
			return {
				logo,
				searchIcon,
				hamburgerIcon,
			};
		},
	};
</script>
