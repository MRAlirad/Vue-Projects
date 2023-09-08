<template>
	<section class="form-section">
		<h2>How was you learning experience?</h2>
		<form @submit.prevent="submitSurvey">
			<div class="form-control">
				<label for="name">Your Name</label>
				<input
					type="text"
					id="name"
					name="name"
					v-model.trim="enteredName"
				/>
			</div>
			<h3>My learning experience was ...</h3>
			<div class="form-control">
				<input
					type="radio"
					id="rating-poor"
					value="poor"
					name="rating"
					v-model="chosenRating"
				/>
				<label for="rating-poor">Poor</label>
			</div>
			<div class="form-control">
				<input
					type="radio"
					id="rating-average"
					value="average"
					name="rating"
					v-model="chosenRating"
				/>
				<label for="rating-average">Average</label>
			</div>
			<div class="form-control">
				<input
					type="radio"
					id="rating-great"
					value="great"
					name="rating"
					v-model="chosenRating"
				/>
				<label for="rating-great">Great</label>
			</div>
			<p
				class="error-text"
				v-if="invalidInput"
			>
				One or more input fields are invalid. Please check your provided data.
			</p>
			<Button
				text="Submit"
				type="submit"
			/>
		</form>
	</section>
</template>

<script>
	import Button from './Button.vue';

	export default {
		name: 'Form',
		components: {
			Button,
		},
		data() {
			return {
				enteredName: '',
				chosenRating: null,
				invalidInput: false,
			};
		},
		emits: ['survey-submit'],
		methods: {
			submitSurvey() {
				if (this.enteredName === '' || !this.chosenRating) {
					this.invalidInput = true;
					return;
				}
				this.invalidInput = false;

				fetch('http://localhost:5000/survay', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: this.enteredName,
						rating: this.chosenRating,
					}),
				});

				this.enteredName = '';
				this.chosenRating = null;
			},
		},
	};
</script>

<style scoped>
	.form-section {
		margin: 2rem auto;
		max-width: 40rem;
		padding: 1rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}
	.form-control {
		margin: 0.5rem 0;
	}

	input[type='text'] {
		display: block;
		width: 20rem;
		margin-top: 0.5rem;
		padding: 5px 10px;
		outline: none;
		border: 1px solid #333;
		border-radius: 3px;
	}

	input[type='radio'] {
		margin-right: 10px;
	}

	.error-text {
		color: red;
		margin: 10px 0;
	}
</style>
