<template>
	<div class="contact-container">
		<h2 class="title">{{ contactInfo.name }}</h2>
		<Button
			:text="detailsAreVisible ? 'Hide Details' : 'Show Details'"
			@on-click="toggleDetails"
		/>
		<div
			class="contact-info"
			v-show="detailsAreVisible"
		>
			<ContactItems
				name="Phone"
				:info="contactInfo.phone"
			/>
			<ContactItems
				name="Email"
				:info="contactInfo.email"
			/>
		</div>
		<Button
			text="delete"
			@on-click="$emit('delete', contactInfo.id)"
		/>
	</div>
</template>

<script>
	import ContactItems from './ContactItems.vue';
	import Button from './Button.vue';

	export default {
		name: 'ContactInfo',
		components: {
			ContactItems,
			Button,
		},
		props: {
			contactInfo: Object,
		},
		emits: ['delete'],
		data() {
			return {
				detailsAreVisible: false,
			};
		},
		methods: {
			toggleDetails() {
				this.detailsAreVisible = !this.detailsAreVisible;
			},
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
		width: 100%;
		max-width: 40rem;
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}
	.title {
		font-size: 2rem;
		border-bottom: 4px solid #ccc;
		color: #58004d;
		margin: 0 0 1rem 0;
	}

	.contact-info {
		width: 85%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
