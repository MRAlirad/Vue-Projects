<template>
	<button
		class="btn"
		:class="mode"
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
			mode: String,
		},
		emits: ['on-click'],
	};
</script>

<style scoped>
	.btn {
		padding: 0.75rem 1.5rem;
		font-family: inherit;
		background-color: #3a0061;
		border: 1px solid #3a0061;
		color: white;
		cursor: pointer;
	}

	.btn:hover,
	.btn:active {
		background-color: #270041;
		border-color: #270041;
	}

	.btn.outline {
		background-color: transparent;
		color: #3a0061;
		border: none;
	}

	.btn.outline:hover,
	.btn.outline:active {
		background-color: #edd2ff;
	}
</style>
