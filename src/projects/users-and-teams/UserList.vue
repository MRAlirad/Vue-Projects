<template>
	<div class="users-list">
		<Button
			text="save changes"
			:active="true"
			@on-click="saveChanges"
		/>
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
	import Button from './Button.vue';

	export default {
		name: 'UserList',
		components: {
			UserItem,
			Button,
		},
		data() {
			return {
				changesSaved: false,
			};
		},
		methods: {
			saveChanges() {
				this.changesSaved = true;
			},
		},
		beforeRouteEnter(to, from, next) {
			next();
		},
		beforeRouteLeave(to, from, next) {
			if (this.changesSaved) next();
			else next(confirm('Are you sure? you got unsaved changes'));
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
