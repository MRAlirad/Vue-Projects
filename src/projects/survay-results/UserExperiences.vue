<template>
	<section class="user-experience-section">
		<h2>Submitted Experiences</h2>
		<Button
			text="Load Submitted Experiences"
			@on-click="loadExperiences"
		/>
		<p v-show="isLoading">Loading...</p>
		<p v-show="!isLoading && error">{{ error }}</p>
		<p v-show="!isLoading && results.length === 0 && !error">No stored experience found! start adding some survay result</p>
		<div
			class="survay-result-conainer"
			v-show="!isLoading && results.length > 0"
		>
			<SurvayItem
				v-for="{ id, name, rating } in results"
				:key="id"
				:name="name"
				:rating="rating"
				:id="id"
			/>
		</div>
	</section>
</template>

<script>
	import Button from './Button.vue';
	import SurvayItem from './SurvayItem.vue';

	export default {
		name: 'UserExperiences',
		components: {
			Button,
			SurvayItem,
		},
		data() {
			return {
				results: [],
				isLoading: false,
				error: null,
			};
		},
		methods: {
			async loadExperiences() {
				this.isLoading = true;
				this.error = null;
				try {
					let response = await fetch('http://localhost:5000/survay');
					if (response.ok) {
						let data = await response.json();
						const results = [];
						for (const { id, name, rating } of data) results.push({ id, name, rating });
						this.results = results;
						this.isLoading = false;
					}
					else
					{
						this.isLoading = false;
						throw new Error('faild to fetch data! please try again');
					}
				} catch (error) {
					this.error = error.message;
				}
			},
		},
		mounted() {
			this.loadExperiences();
		},
	};
</script>

<style scoped>
	.user-experience-section {
		margin: 2rem auto;
		max-width: 40rem;
		padding: 1rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.survay-result-conainer {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
