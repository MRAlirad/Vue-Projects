<template>
	<base-container title="Vuex" v-if="isAuth">
		<Counter />
		<FavouriteValue />
		<ChangeCounter />
		<button @click="addOne">Add 10</button>
	</base-container>
	<base-container title="Auth">
		<UserAuth />
	</base-container>
</template>

<script>
	import BaseContainer from './BaseContainer.vue';
	import Counter from './Counter.vue';
	import ChangeCounter from './ChangeCounter.vue';
	import FavouriteValue from './FavouriteValue.vue';
	import UserAuth from './UserAuth.vue';

	export default {
		components: {
			BaseContainer,
			Counter,
			ChangeCounter,
			FavouriteValue,
			UserAuth,
		},
		computed: {
			counter() {
				return this.$store.state.counter;
			},
			isAuth() {
				return this.$store.getters.userIsAuthenticated;
			},
		},
		methods: {
			addOne() {
				// this.$store.commit('increase', {value: 10});
				// this.$store.commit({
				// type: 'increase',
				// value: 10,
				// });
				this.$store.dispatch({
					type: 'increase',
					value: 10,
				});
			},
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
