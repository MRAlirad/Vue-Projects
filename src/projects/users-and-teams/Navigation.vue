<template>
	<header>
		<Button text="Teams" />
		<Button text="Users" />
	</header>
</template>

<script>
	import Button from './Button.vue';

	export default {
		name: 'Navigation',
		components: {
			Button,
		},
	};
</script>

<style scoped>
	header {
		width: 100%;
		height: 5rem;
		background-color: #11005c;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
</style>
