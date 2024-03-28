<template>
	<div class="flex-grow my-10">
		<ol class="list-none flex flex-col gap-8 px-[16px]">
			<li
				v-for="category in categories"
				class="text-headline-mobile text-black-600 leading-[24px] tracking-text hover:text-primary cursor-default font-medium"
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
