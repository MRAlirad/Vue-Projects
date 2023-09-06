<template>
	<section class="section">
		<header>
			<h1>My Friends</h1>
		</header>
		<AddNewFriend @add-contact="addContact" />
		<div class="contact-segment">
			<ContactInfo
				v-for="friend in friends"
				:key="friend.id"
				:contactInfo="friend"
				@delete="deleteContact"
			/>
		</div>
	</section>
</template>

<script>
	import AddNewFriend from './AddNewFriend.vue';
	import ContactInfo from './ContactInfo.vue';

	export default {
		name: 'FriendContact',
		components: {
			AddNewFriend,
			ContactInfo,
		},
		data() {
			return {
				friends: [
					{
						id: Math.random(),
						name: 'Manuel Lorenz',
						phone: '01234567890',
						email: 'manuel@localhost.com',
					},
					{
						id: Math.random(),
						name: 'Julie Jones',
						phone: '098765442121',
						email: 'julie@localhost.com',
					},
				],
			};
		},
		methods: {
			addContact({ name, phone, email }) {
				this.friends.push({
					id: Date.now(),
					name,
					phone,
					email,
				});
			},
			deleteContact(id) {
				if (confirm('are you sure')) this.friends = this.friends.filter(friend => friend.id !== id);
			},
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

	.contact-segment {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin: 0 5%;
		gap: 25px;
	}
</style>
