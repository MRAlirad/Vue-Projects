<template>
	<section class="section">
		<header>
			<h1>My Friends</h1>
		</header>
		<div class="contact-container">
			<Contactt
				v-for="friend in friends"
				:key="friend.id"
				:contactInfo="friend"
			/>
		</div>
	</section>
</template>

<script>
	import Contactt from './Contactt.vue';
	export default {
		name: 'FriendContactt',
		components: {
			Contactt,
		},
		data() {
			return {
				friends: [
					{
						id: 123465789,
						name: 'Manuel Lorenz',
						phone: '01234567890',
						email: 'manuel@localhost.com',
					},
					{
						id: 987654321,
						name: 'Julie Jones',
						phone: '098765442121',
						email: 'julie@localhost.com',
					},
				],
			};
		},
	};
</script>

<style scoped>
	.section header {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: #58004d;
		color: white;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	.section form {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 1rem auto;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}
	.section input {
		font: inherit;
		padding: 0.15rem;
	}
	.section label {
		font-weight: bold;
		margin-right: 1rem;
		width: 7rem;
		display: inline-block;
	}
	.section form div {
		margin: 1rem 0;
	}
</style>
