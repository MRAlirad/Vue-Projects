<template>
	<div class="rating-control">
		<button
			type="button"
			class="btn"
			:class="{ active: modelValue === 'poor' }"
			@click="activate('poor')"
		>
			Poor
		</button>
		<button
			type="button"
			class="btn"
			:class="{ active: modelValue === 'average' }"
			@click="activate('average')"
		>
			Average
		</button>
		<button
			type="button"
			class="btn"
			:class="{ active: modelValue === 'great' }"
			@click="activate('great')"
		>
			great
		</button>
	</div>
</template>

<script>
	export default {
		name: 'RatingControl',
		props: ['modelValue'],
		emits: ['update:modelValue'],
		methods: {
			activate(option) {
				this.$emit('update:modelValue', option);
			},
		},
	};
</script>

<style scoped>
	.rating-control {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.btn {
		border: 1px solid #ccc;
		padding: 1rem;
		font: inherit;
		background-color: transparent;
		cursor: pointer;
	}

	.btn.active {
		border-color: #a00078;
		color: #a00078;
	}
</style>
