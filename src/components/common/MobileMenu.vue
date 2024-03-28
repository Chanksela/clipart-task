<template>
	<div class="flex-grow my-10">
		<ol class="list-none flex flex-col gap-8 px-[16px]">
			<li
				v-for="category in categories"
				class="text-headline-mobile text-black-600 leading-[24px] tracking-text"
			>
				{{ category }}
			</li>
		</ol>
		<div class="flex justify-center mt-[48px] gap-2">
			<CircleIcon size="32px">
				<img :src="fb" alt="facebook icon" />
			</CircleIcon>
			<CircleIcon size="32px">
				<img :src="inst" alt="instagram icon" />
			</CircleIcon>
		</div>
	</div>
</template>
<script>
	import fb from "../../assets/svg/fb.svg";
	import inst from "../../assets/svg/inst.svg";

	import CircleIcon from "./CircleIcon.vue";
	export default {
		name: "MobileMenu",
		components: { CircleIcon },
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
