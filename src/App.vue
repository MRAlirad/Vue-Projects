<template>
	<header>
		<h1>Vue Events</h1>
	</header>
	<section id="events">
		<h2>Events in Action</h2>
		<button @click="increment(10)">Increment</button>
		<button @click="decrement(5)">Decrement</button>
		<p>Result: {{ this.counter }}</p>
		<input
			type="text"
			v-model="name"
		/>
		<button @click="reset">reset</button>
		<p>your name: {{ this.name }}</p>
	</section>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				counter: 0,
				name: '',
				confirmName: '',
			};
		},
		watch: {
			counter() {
				console.log('fuckonfsky');
			},
		},
		methods: {
			confirmInput() {
				this.confirmName = this.name;
			},
			setName(event, lastName) {
				this.name = event.target.value + ' ' + lastName;
			},
			increment(num) {
				return (this.counter = this.counter + num);
			},
			decrement(num) {
				return (this.counter = this.counter - num);
			},
			reset() {
				this.name = '';
			},
		},
	};
</script>

<style scoped>
	header {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: #4fc08d;
		color: white;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#events {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		margin: 3rem auto;
		border-radius: 10px;
		padding: 1rem;
		text-align: center;
		width: 90%;
		max-width: 40rem;
	}

	#events h2 {
		font-size: 2rem;
		border-bottom: 4px solid #ccc;
		color: #4fc08d;
		margin: 0 0 1rem 0;
	}

	#events p {
		font-size: 1.25rem;
		font-weight: bold;
		border: 1px solid #4fc08d;
		background-color: #4fc08d;
		color: white;
		padding: 0.5rem;
		border-radius: 25px;
	}

	#events input {
		font: inherit;
		border: 1px solid #ccc;
	}

	#events input:focus {
		outline: none;
		border-color: #1b995e;
		background-color: #d7fdeb;
	}

	#events button {
		font: inherit;
		cursor: pointer;
		border: 1px solid #ff0077;
		background-color: #ff0077;
		color: white;
		padding: 0.05rem 1rem;
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
		border-radius: 20px;
		margin: 0 1rem;
	}

	#events button:hover,
	#events button:active {
		background-color: #ec3169;
		border-color: #ec3169;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
	}
</style>
