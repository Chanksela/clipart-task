<template>
	<ul ref="list" class="hidden items-center lg:flex gap-[32px] ml-[32px]">
		<li
			v-for="category in categories"
			class="text-headline text-black-600 leading-[24px] tracking-text hover:text-primary cursor-default font-medium"
		>
			{{ category }}
		</li>
		<p
			class="w-[180px] ml-[32px] text-headline text-black-600 leading-[24px] tracking-text hover:text-primary cursor-default font-medium"
		>
			სხვა
			<li class="list-none"></li>
		</p>
	</ul>
</template>

<script>
	export default {
		props: {
			categories: {
				type: Array,
				required: true,
			},
		},
		mounted() {
			this.getUlOffsetWidth();
			window.addEventListener("resize", this.getUlOffsetWidth);
		},
		beforeUnmount() {
			window.removeEventListener("resize", this.getUlOffsetWidth);
		},
		methods: {
			getUlOffsetWidth() {
				const ulOffsetWidth = this.$refs.list.offsetWidth;
				console.log("Offset width of ul:", ulOffsetWidth);
				// You can use ulOffsetWidth as needed in your component
			},
		},
	};
</script>
