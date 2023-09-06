<template>
	<MyGoals />
</template>

<script>
	import MyGoals from './projects/addGoals/AddGoals.vue';

	export default {
		name: 'App',
		components: {
			MyGoals,
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: 'Jost', sans-serif;
	}

	body {
		margin: 0;
	}
</style>
