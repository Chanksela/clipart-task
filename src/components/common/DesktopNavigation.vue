<template>
	<ul ref="list" class="hidden items-center lg:flex gap-[32px] ml-[32px]">
		<li
			v-for="category in categories"
			class="text-headline text-black-600 leading-[24px] tracking-text hover:text-primary cursor-default font-medium"
		>
			{{ category }}
		</li>
		<div
			class="w-[180px] ml-[32px] text-headline text-black-600 leading-[24px] tracking-text cursor-default font-medium relative"
		>
			<span @click="toggleOtherCategories" class="hover:text-primary">
				სხვა</span
			>
			<ul
				class="flex flex-col absolute rounded-2xl bg-white gap-4 mt-2.5 py-4 w-full shadow-big"
				v-if="showOtherCategories"
			>
				<li
					class="list-none bottom-0 left-0 pl-5 hover:text-primary"
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
