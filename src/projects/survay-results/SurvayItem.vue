<template>
	<p class="survay-item">
		<span class="highlight">{{ name }}</span>
		rated the learning experience
		<span :class="ratingClass">{{ rating }}</span
		>.
	</p>
</template>

<script>
	export default {
		name: 'SurvayItem',
		props: ['name', 'rating'],
		computed: {
			ratingClass() {
				return 'highlight rating--' + this.rating;
			},
		},
	};
</script>

<style scoped>
	.survay-item {
		border: 1px solid #ccc;
		padding: 1rem;
		font-size: 1rem;
		/* margin: 0.5rem 0; */
	}

	.highlight {
		font-weight: bold;
	}

	.rating--poor {
		color: #f00 ;
	}

	.rating--average {
		color: #330075;
	}

	.rating--great {
		color: #008327;
	}
</style>
