<template>
	<header>
		<Button
			text="Teams"
			@on-click="setActivePage('teams-list')"
		/>
		<Button
			text="Users"
			@on-click="setActivePage('users-list')"
		/>
	</header>
</template>

<script>
	import Button from './Button.vue';

	export default {
		name: 'Navigation',
		components: {
			Button,
		},
		emits: ['set-page'],
		setActivePage(page) {
			this.$emit('set-page', page);
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
