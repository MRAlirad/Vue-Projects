<template>
	<!-- <MyGoals /> -->
	<!-- <MonsterSlayer /> -->
	<FriendContact />
</template>

<script>
	import MyGoals from './projects/addGoals/AddGoals.vue';
	import MonsterSlayer from './projects/monsterSlayer/MonsterSlayer.vue';
	import FriendContact from './projects/friendContactInfo/FriendContect.vue'

	export default {
		name: 'App',
		components: {
			MyGoals,
			MonsterSlayer,
			FriendContact
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
