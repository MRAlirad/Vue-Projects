<template>
	<div class="users-teams-app">
		<Navigation />
		<main>
			<router-view></router-view>
		</main>
		<footer>
			<router-view name="footer"></router-view>
		</footer>
	</div>
</template>

<script>
	import Navigation from './Navigation.vue';

	export default {
		name: 'UsersTeamsApp',
		components: {
			Navigation,
		},
		data() {
			return {
				teams: [
					{ id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
					{ id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
					{ id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
				],
				users: [
					{ id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
					{ id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
					{ id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
					{ id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
					{ id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
				],
			};
		},
		provide() {
			return {
				teams: this.teams,
				users: this.users,
			};
		},
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

	footer {
		width: 100%;
		height: 5rem;
		background-color: #11005c;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		color: white;
		font-size: 25px;
	}
</style>
