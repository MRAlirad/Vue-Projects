<template>
	<button
		class="btn"
		:class="{ primary: mode === 'primary', icon: mode === 'icon' }"
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
			mode: {
				type: String,
				default: 'primary',
			},
		},
	};
</script>

<style>
	.btn.primary {
		font: inherit;
		border: 1px solid #360032;
		background-color: #360032;
		color: white;
		padding: 0.5rem 2rem;
		cursor: pointer;
		border-radius: 5px;
		width: max-content;
	}

	.btn.primary:hover,
	.btn.primary:active {
		background-color: #5c0556;
		border-color: #5c0556;
	}

	.btn.icon {
		font-size: 25px;
		color: red;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 5px;
	}
</style>
