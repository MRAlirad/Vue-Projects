<template>
    <button class="btn" @click="$emit('on-click')">
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
}
</script>

<style scoped>
	/* .btn {
		font: inherit;
		background: transparent;
		border: 1px solid transparent;
		cursor: pointer;
		color: white;
		padding: 0.5rem 1.5rem;
		display: inline-block;
	}

	.btn:hover,
	.btn:active {
		color: #f1a80a;
		border-color: #f1a80a;
		background-color: #1a037e;
	} */
</style>