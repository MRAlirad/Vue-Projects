<template>
	<section class="learning-resource-container">
		<header>
			<h3>{{ title }}</h3>
			<Button
				text="Delete"
				mode="outline"
				@on-click="deleteResource(id)"
			/>
		</header>
		<p>{{ description }}</p>
		<a :href="link" target="_blank">View Resource</a>
	</section>
</template>

<script>
	import Button from './Button.vue';

	export default {
		name: 'LearningResource',
		components: {
			Button,
		},
		props: {
			title: String,
			description: String,
			link: String,
			id: Number,
		},
		inject: ['deleteResource'],
	};
</script>

<style scoped>
	.learning-resource-container {
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		margin: 2rem auto;
		max-width: 40rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h3 {
		font-size: 1.25rem;
		margin: 0.5rem 0;
	}

	p {
		margin: 0.5rem 0;
	}

	a {
		text-decoration: none;
		color: #ce5c00;
	}

	a:hover,
	a:active {
		color: #c89300;
	}
</style>
