<template>
	<button
		class="btn"
		@click="$emit('on-click')"
	>
		{{ text }}
	</button>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			text: String,
		},
		emits: ['on-click'],
	};
</script>

<style scoped>
	.btn {
		font: inherit;
		cursor: pointer;
		border: 1px solid #ff0077;
		background-color: #ff0077;
		color: white;
		padding: 0.05rem 1rem;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
		width: max-content;
	}
	.btn:hover,
	.btn:active {
		background-color: #ec3169;
		border-color: #ec3169;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
	}
</style>
