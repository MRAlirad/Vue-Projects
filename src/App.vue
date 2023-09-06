<template>
	<!-- <MyGoals /> -->
	<MonsterSlayer />
</template>

<script>
	import MyGoals from './projects/addGoals/AddGoals.vue';
	import MonsterSlayer from './projects/monsterSlayer/MonsterSlayer.vue';

	export default {
		name: 'App',
		components: {
			MyGoals,
			MonsterSlayer,
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
