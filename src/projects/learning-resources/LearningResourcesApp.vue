<template>
	<Header title="RememberMe" />
	<Resources />
</template>

<script>
	import Header from './Header.vue';
	import Resources from './Resources.vue';

	export default {
		name: 'LearningresourcesApp',
		components: {
			Header,
			Resources,
		},
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

	* {
		box-sizing: border-box;
	}

	html {
		font-family: 'Roboto', sans-serif;
	}

	body {
		margin: 0;
	}
</style>
