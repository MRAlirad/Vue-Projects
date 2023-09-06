<template>
	<!-- <MyGoals /> -->
	<!-- <MonsterSlayer /> -->
	<FriendContactt />
</template>

<script>
	import MyGoals from './projects/addGoals/AddGoals.vue';
	import MonsterSlayer from './projects/monsterSlayer/MonsterSlayer.vue';
	import FriendContactt from './projects/friendContactInfoo/FriendContectt.vue'

	export default {
		name: 'App',
		components: {
			MyGoals,
			MonsterSlayer,
			FriendContactt
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
