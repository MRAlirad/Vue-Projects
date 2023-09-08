<template>
	<button
		class="btn"
		:type="type"
		@click="$emit('on-click')"
	>
		{{ text }}
	</button>
</template>

<script>
	export default {
		name: 'Button',
		emits: ['on-click'],
		props: {
			text: String,
			type: {
				type: String,
				default: 'button',
			},
		},
	};
</script>

<style>
	.btn {
		font: inherit;
		border: 1px solid #360032;
		background-color: #360032;
		color: white;
		padding: 0.5rem 2rem;
		cursor: pointer;
		border-radius: 5px;
        width: max-content;
	}

	.btn:hover,
	.btn:active {
		background-color: #5c0556;
		border-color: #5c0556;
	}
</style>
