<template>
	<transition-group
		tag="ul"
		name="users-list"
	>
		<li
			v-for="user in users"
			:key="user"
			@click="removeUser(user)"
		>
			{{ user }}
		</li>
	</transition-group>
	<div class="input-box">
		<input
			type="text"
			ref="userInput"
		/>
		<button @click="addUser">add user</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: ['Max', 'Manu', 'Mary', 'Mohammad', 'Michael', 'Angella'],
			};
		},
		methods: {
			removeUser(user) {
				this.users = this.users.filter(usr => usr !== user);
			},
			addUser() {
				this.users.unshift(this.$refs.userInput.value);
			},
		},
	};
</script>

<style scoped>
	ul {
		list-style: none;
		margin: 0 0 20px;
		padding: 0;
	}
	li {
		border: 1px solid #ccc;
		padding: 1rem;
		text-align: center;
		cursor: pointer;
	}
	.input-box {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.users-list-enter-from {
		opacity: 0;
		transform: translateX(-30px);
	}
	.users-list-enter-active {
		transition: all 0.5s ease-out;
	}
	.users-list-enter-to {
		opacity: 1;
		transform: translateX(0);
	}

	.users-list-leave-from {
		opacity: 1;
		transform: translateX(0);
	}
	.users-list-leave-active {
		transition: all 0.5s ease-in;
		position: absolute;
	}
	.users-list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

	.users-list-move {
		transition: transform 0.8s ease;
	}
</style>
