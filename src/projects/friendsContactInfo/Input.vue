<template>
	<div>
		<label>{{ label }}</label>
		<input
			:type="type"
			:value="model"
			@input="$emit('update:model', $event.target.value)"
		/>
	</div>
</template>

<script>
	export default {
		name: 'Input',
		emits: ['update:model'],
		props: {
			label: String,
			type: String,
			model: String,
		},
	};
</script>

<style scoped>
	input {
		font: inherit;
		padding: 0.15rem;
	}
	label {
		font-weight: bold;
		margin-right: 1rem;
		width: 7rem;
		display: inline-block;
	}
</style>
