<template>
	<header>
		<router-link to="/users">Users</router-link>
		<router-link to="/teams">Teams</router-link>
        
	</header>
</template>

<script>
	export default {
		name: 'Navigation',
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
	a {
		font: inherit;
		background: transparent;
		border: 1px solid transparent;
		cursor: pointer;
		color: white;
		padding: 0.5rem 1.5rem;
		display: inline-block;
		text-decoration: none;
	}

	a:hover,
	a:active,
	a.router-link-active {
		color: #f1a80a;
		border-color: #f1a80a;
		background-color: #1a037e;
	}
</style>
