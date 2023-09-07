<template>
	<!-- <MyGoals /> -->
	<!-- <MonsterSlayer /> -->
	<!-- <FriendsContact /> -->
	<LearningResourcesApp />
</template>

<script>
	import MyGoals from './projects/addGoals/AddGoals.vue';
	import MonsterSlayer from './projects/monsterSlayer/MonsterSlayer.vue';
	import FriendsContact from './projects/friends-contact-info/FriendsContact.vue';
	import LearningResourcesApp from './projects/learning-resources/LearningResourcesApp.vue';

	export default {
		name: 'App',
		components: {
			MyGoals,
			MonsterSlayer,
			FriendsContact,
			LearningResourcesApp
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
