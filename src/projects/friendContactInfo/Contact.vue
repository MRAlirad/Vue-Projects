<template>
	<div class="contact-container">
		<h2 class="title">{{ contactInfo.name }}</h2>
		<button class="btn">Show Details</button>
		<div class="contact-info">
			<ContactItem
				name="Phone"
				:info="contactInfo.phone"
			/>
			<ContactItem
				name="Email"
				:info="contactInfo.email"
			/>
		</div>
	</div>
</template>

<script>
	import ContactItem from './ContactItem.vue';

	export default {
		name: 'Contact',
		components: {
			ContactItem,
		},
		props: {
			contactInfo: Object,
		},
	};
</script>

<style scoped>
	.contact-container {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 1rem auto;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}
	.title {
		font-size: 2rem;
		border-bottom: 4px solid #ccc;
		color: #58004d;
		margin: 0 0 1rem 0;
	}
	.btn {
		font: inherit;
		cursor: pointer;
		border: 1px solid #ff0077;
		background-color: #ff0077;
		color: white;
		padding: 0.05rem 1rem;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	}
	.btn:hover,
	.btn:active {
		background-color: #ec3169;
		border-color: #ec3169;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
	}
</style>
