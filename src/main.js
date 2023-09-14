import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
// import teamUsersRouter from './projects/users-and-teams/routes.js';
import {createStore} from 'vuex';
const store = createStore({
    state() {
        return {
            counter: 0,
        };
    }
});



createApp(App)
// .use(teamUsersRouter)
.use(store)
.mount('#app');
