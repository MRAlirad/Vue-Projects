<template>
	<div class="survay-app">
		<Form @survey-submit="StoreSurvay" />
	</div>
</template>

<script>
	import Form from './Form.vue';
	export default {
		name: 'SurvayResultsApp',
		components: {
			Form,
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
                console.log(this.savedSurveyResults)
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
