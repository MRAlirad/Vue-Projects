<template>
    <div class="users-teams-app">
        <Navigation />
    </div>
</template>

<script>
    import Navigation from './Navigation.vue';

	export default {
		name: 'UsersTeamsApp',
        components: {
            Navigation,
        }
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
