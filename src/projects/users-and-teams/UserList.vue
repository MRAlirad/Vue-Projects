<template>
	<div class="users-list">
		<UserItem
			v-for="user in users"
			:key="user.id"
			:name="user.fullName"
			:role="user.role"
		/>
	</div>
</template>

<script>
	import UserItem from './UserItem.vue';

	export default {
		name: 'UserList',
		components: {
			UserItem,
		},
		beforeRouteEnter(to, from, next){
			next();
		},
		inject: ['users'],
	};
</script>

<style scoped>
	.users-list {
		margin: 2rem auto;
		max-width: 20rem;
	}
</style>
