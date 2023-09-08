<template>
	<div class="survay-item">
		<p>
			<span class="highlight">{{ name }}</span>
			rated the learning experience
			<span :class="ratingClass">{{ rating }}</span
			>.
		</p>
		<Button
			text="×"
			mode="icon"
			@on-click="deleteItem"
		/>
	</div>
</template>

<script>
	import Button from './Button.vue';

	export default {
		name: 'SurvayItem',
		props: ['name', 'rating', 'id'],
		components: {
			Button,
		},
		computed: {
			ratingClass() {
				return 'highlight rating--' + this.rating;
			},
		},
		methods: {
			async deleteItem() {
				this.error = null;
				try {
					let response = await fetch(`http://localhost:5000/survay/${this.id}`, {
						method: 'DELETE',
					});
					if (!response.ok) throw new Error('server error');
				} catch (error) {
					alert(error.message);
				}
			},
		},
	};
</script>

<style scoped>
	.survay-item {
		border: 1px solid #ccc;
		padding: 1rem;
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.highlight {
		font-weight: bold;
	}

	.rating--poor {
		color: #f00;
	}

	.rating--average {
		color: #330075;
	}

	.rating--great {
		color: #008327;
	}
</style>
