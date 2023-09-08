<template>
	<section class="user-experience-section">
		<h2>Submitted Experiences</h2>
		<Button text="Load Submitted Experiences" />
		<div class="survay-result-conainer"></div>
	</section>
</template>

<script>
	import Button from './Button.vue';

	export default {
		props: ['results'],
		name: 'UserExperiences',
		components: {
			Button,
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
</style>
