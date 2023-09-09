<template>
	<!-- <MyGoals /> -->
	<!-- <MonsterSlayer /> -->
	<!-- <FriendsContact /> -->
	<!-- <LearningResourcesApp /> -->
	<!-- <Form /> -->
	<!-- <SurvayResultsApp /> -->
	<UsersTeamsApp />
</template>

<script>
	import MyGoals from './projects/addGoals/AddGoals.vue';
	import MonsterSlayer from './projects/monsterSlayer/MonsterSlayer.vue';
	import FriendsContact from './projects/friends-contact-info/FriendsContact.vue';
	import LearningResourcesApp from './projects/learning-resources/LearningResourcesApp.vue';
	import Form from './projects/form/Form.vue';
	import SurvayResultsApp from './projects/survay-results/SurvayResultsApp.vue';
	import UsersTeamsApp from './projects/users-and-teams/UsersTeamsApp.vue';

	export default {
		name: 'App',
		components: {
			MyGoals,
			MonsterSlayer,
			FriendsContact,
			LearningResourcesApp,
			Form,
			SurvayResultsApp,
			UsersTeamsApp,
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
