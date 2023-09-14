<template>
	<div class="container">
		<div
			class="block"
			:class="{ animate: animatedBlock }"
		></div>
		<button @click="animateBlock">Animate</button>
	</div>
	<div class="container">
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@enter-cancelled="enterCanceled"
			@leave-cancelled="leaveCanceled"
		>
			<p v-if="paraIsVisible">This is only sth visible!!!</p>
		</transition>
		<button @click="togglePara">Toggle para</button>
	</div>
	<div class="container">
		<transition
			name="fade-button"
			mode="out-in"
		>
			<button
				@click="showUsers"
				v-if="!userIsVisible"
			>
				Show Users
			</button>
			<button
				@click="hideUsers"
				v-else
			>
				Hide Users
			</button>
		</transition>
	</div>
	<base-modal
		@close="hideDialog"
		:open="dialogIsVisible"
	>
		<p>This is a test dialog!</p>
		<button @click="hideDialog">Close it!</button>
	</base-modal>
	<div class="container">
		<button @click="showDialog">Show Dialog</button>
	</div>
</template>

<script>
	import BaseModal from './BaseModal.vue';

	export default {
		components: {
			BaseModal,
		},
		data() {
			return {
				animatedBlock: false,
				dialogIsVisible: false,
				paraIsVisible: false,
				userIsVisible: false,
				enterInterval: null,
				leaveInterval: null,
			};
		},
		methods: {
			enterCanceled() {
				clearInterval(this.enterInterval);
			},
			leaveCanceled() {
				clearInterval(this.leaveInterval);
			},
			beforeEnter(element) {
				element.style.opacity = 0;
			},
			enter(element, done) {
				let round = 1;
				this.enterInterval = setInterval(() => {
					element.style.opacity = round * 0.01;
					round++;
					if (round > 100) {
						clearInterval(this.enterInterval);
						done();
					}
				}, 20);
			},
			afterEnter(element) {
				console.log('afterEnter');
				console.log(element);
			},
			beforeLeave(element) {
				element.style.opacity = 1;
			},
			leave(element, done) {
				let round = 1;
				this.leaveInterval = setInterval(() => {
					element.style.opacity = 1 - round * 0.01;
					round++;
					if (round > 100) {
						clearInterval(this.leaveInterval);
						done();
					}
				}, 20);
			},
			afterLeave(element) {
				console.log('afterLeave');
				console.log(element);
			},
			showUsers() {
				this.userIsVisible = true;
			},
			hideUsers() {
				this.userIsVisible = false;
			},
			animateBlock() {
				this.animatedBlock = true;
			},
			togglePara() {
				this.paraIsVisible = !this.paraIsVisible;
			},
			showDialog() {
				this.dialogIsVisible = true;
			},
			hideDialog() {
				this.dialogIsVisible = false;
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
	button {
		font: inherit;
		padding: 0.5rem 2rem;
		border: 1px solid #810032;
		border-radius: 30px;
		background-color: #810032;
		color: white;
		cursor: pointer;
	}
	button:hover,
	button:active {
		background-color: #a80b48;
		border-color: #a80b48;
	}
	.block {
		width: 8rem;
		height: 8rem;
		background-color: #290033;
		margin-bottom: 2rem;
		/* transition: transform 0.4s ease-out; */
	}
	.container {
		max-width: 40rem;
		margin: 2rem auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 2rem;
		border: 2px solid #ccc;
		border-radius: 12px;
	}
	.animate {
		/* transform: translateX(-150px); */
		animation: slide-scale 0.3s ease-out forwards;
	}
	@keyframes slide-scale {
		0% {
			transform: translateX(0) scale(1);
		}
		60% {
			transform: translateX(-100px) scale(1.5);
		}
		100% {
			transform: translateX(-150px) scale(1);
		}
	}

	/* para animation */
	/* .para-enter-from {
		opacity: 0;
		transform: translateX(-30px);
	}

	.para-enter-active {
		transition: all 0.3s ease-out;
	}

	.para-enter-to {
		opacity: 1;
		transform: translateX(0);
	}

	.para-leave-from {
		opacity: 1;
		transform: translateX(0);
	}

	.para-leave-active {
		transition: all 0.3s ease-out;
	}

	.para-leave-to {
		opacity: 0;
		transform: translateX(30px);
	} */

	/* button animaiton */
	.fade-button-enter-from,
	.fade-button-leave-to {
		opacity: 0;
	}
	.fade-button-enter-active {
		transition: opacity 0.3s ease-out;
	}
	.fade-button-leave-active {
		transition: opacity 0.3s ease-in;
	}
	.fade-button-enter-to,
	.fade-button-leave-from {
		opacity: 1;
	}
</style>
