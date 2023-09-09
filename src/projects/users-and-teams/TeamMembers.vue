<template>
	<section>
		<h2>{{ teamName }}</h2>
		<div class="user-items">
			<UserItem
				v-for="member in members"
				:key="member.id"
				:name="member.fullName"
				:role="member.role"
			/>
		</div>
	</section>
</template>

<script>
	import UserItem from './UserItem.vue';

	export default {
		components: {
			UserItem,
		},
		data() {
			return {
				teamName: 'Test',
				members: [
					{ id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
					{ id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
				],
			};
		},
	};
</script>

<style scoped>
	section {
		margin: 2rem auto;
		max-width: 40rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		border-radius: 12px;
	}

	h2 {
		margin: 0.5rem 0;
	}

	.user-items {
		margin: 0;
		padding: 0;
	}
</style>
