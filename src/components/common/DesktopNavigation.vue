<template>
	<ul ref="list" class="hidden items-center lg:flex gap-[32px] ml-[32px]">
		<li
			v-for="category in categories"
			class="text-headline text-black-600 leading-[24px] tracking-text hover:text-primary cursor-default font-medium"
		>
			{{ category }}
		</li>
		<div
			class="w-[180px] ml-[32px] text-headline text-black-600 leading-[24px] tracking-text hover:text-primary cursor-default font-medium"
		>
			<span @click="toggleOtherCategories"> სხვა</span>
			<li
				class="list-none"
				v-for="otherCategory in otherCategories"
				v-show="showOtherCategories"
			>
				{{ otherCategory }}
			</li>
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
