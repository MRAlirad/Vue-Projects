<template>
	<form @submit.prevent="submitData">
		<Input
			label="Name"
			type="text"
			:model="enteredName"
			@update:model="value => (enteredName = value)"
		/>
		<Input
			label="Phone"
			type="tel"
			:model="enteredPhone"
			@update:model="value => (enteredPhone = value)"
		/>
		<Input
			label="Mail"
			type="email"
			:model="enteredEmail"
			@update:model="value => (enteredEmail = value)"
		/>
		<div>
			<Button text="add contact" />
		</div>
	</form>
</template>

<script>
	import Button from './Button.vue';
	import Input from './Input.vue';
	export default {
		name: 'AddNewFriend',
		components: {
			Button,
			Input,
		},
		emits: ['add-contact'],
		data() {
			return {
				enteredName: '',
				enteredPhone: '',
				enteredEmail: '',
			};
		},
		methods: {
			submitData() {
				if (this.enteredName === '' || this.enteredEmail === '' || this.enteredPhone === '') {
					alert('fill all inputs');
					return;
				}
				this.$emit('add-contact', {
					name: this.enteredName,
					email: this.enteredEmail,
					phone: this.enteredPhone,
				});

				this.enteredName = '';
				this.enteredEmail = '';
				this.enteredPhone = '';
			},
		},
	};
</script>

<style scoped>
	form {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 1rem auto;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 90%;
		max-width: 40rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
