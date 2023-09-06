<template>
	<form @submit.prevent="submitData">
		<div>
			<label>Name</label>
			<input
				type="text"
				v-model="enteredName"
			/>
		</div>
		<div>
			<label>Phone</label>
			<input
				type="tel"
				v-model="enteredPhone"
			/>
		</div>
		<div>
			<label>E-Mail</label>
			<input
				type="email"
				v-model="enteredEmail"
			/>
		</div>
		<div>
			<Button text="add contact" />
		</div>
	</form>
</template>

<script>
	import Button from './Button.vue';
	export default {
		name: 'AddNewFriend',
		components: {
			Button,
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
	input {
		font: inherit;
		padding: 0.15rem;
	}
	label {
		font-weight: bold;
		margin-right: 1rem;
		width: 7rem;
		display: inline-block;
	}
</style>
