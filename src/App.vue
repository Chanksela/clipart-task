<template>
	<Navigation />
	<Content />
</template>
<script>
	import Navigation from "./components/Navigation.vue";
	import Content from "./components/Content.vue";
	export default {
		name: "App",
		components: {
			Navigation,
			Content,
		},
	};
</script>
