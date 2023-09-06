<template>
	<!-- <MyGoals /> -->
	<!-- <MonsterSlayer /> -->
	<FriendsContact />
</template>

<script>
	import MyGoals from './projects/addGoals/AddGoals.vue';
	import MonsterSlayer from './projects/monsterSlayer/MonsterSlayer.vue';
	import FriendsContact from './projects/friendsContactInfo/FriendsContact.vue';

	export default {
		name: 'App',
		components: {
			MyGoals,
			MonsterSlayer,
			FriendsContact,
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
