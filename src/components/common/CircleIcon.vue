<template>
	<div
		class="bg-primary-light rounded-full flex justify-center items-center"
		:style="{ width: size, height: size }"
	>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: {
			size: {
				default: "48px",
			},
		},
	};
</script>
