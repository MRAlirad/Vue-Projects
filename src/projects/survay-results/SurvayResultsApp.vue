<template>
	<div class="survay-app">
		<Form @survey-submit="StoreSurvay" />
        <UserExperiences :results="savedSurveyResults" />
	</div>
</template>

<script>
	import Form from './Form.vue';
	import UserExperiences from './UserExperiences.vue';
	export default {
		name: 'SurvayResultsApp',
		components: {
			Form,
			UserExperiences,
		},
		data() {
			return {
				savedSurveyResults: [],
			};
		},
		methods: {
			StoreSurvay({ userName, rating }) {
				this.savedSurveyResults.push({
					id: Date.now(),
					name: userName,
					rating: rating,
				});
				console.log(this.savedSurveyResults);
			},
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
