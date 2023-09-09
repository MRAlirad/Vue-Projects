<template>
	<div class="teams-list">
		<TeamsItem
			v-for="team in teams"
			:key="team.id"
			:name="team.name"
			:member-count="team.members.length"
		/>
	</div>
</template>

<script>
	import TeamsItem from './TeamItem.vue';

	export default {
		name: 'TeamsList',
		components: {
			TeamsItem,
		},
		inject: ['teams'],
	};
</script>

<style scoped>
	.teams-list {
		list-style: none;
		margin: 2rem auto;
		max-width: 40rem;
		padding: 0;
	}
</style>
