<template>
	<section class="user-experience-section">
		<h2>Submitted Experiences</h2>
		<Button
			text="Load Submitted Experiences"
			@on-click="loadExperiences"
		/>
		<p v-show="isLoading">Loading...</p>
		<p v-show="!isLoading && results.length === 0"> No stored experience found! start adding some survay result</p>
		<div
			class="survay-result-conainer"
			v-show="!isLoading && results.length > 0"
		>
			<SurvayItem
				v-for="{ id, name, rating } in results"
				:key="id"
				:name="name"
				:rating="rating"
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
			};
		},
		methods: {
			async loadExperiences() {
				this.isLoading = true;
				let response = await fetch('http://localhost:5000/survay');
				if (response.ok && response.status === 200) {
					let data = await response.json();
					const results = [];
					for (const { id, name, rating } of data) results.push({ id, name, rating });
					this.results = results;
				} else alert('server error! please try again');
				this.isLoading = false;
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
