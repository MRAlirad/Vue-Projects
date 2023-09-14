import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
// import teamUsersRouter from './projects/users-and-teams/routes.js';

import vuexStore from './projects/vuex/store';

createApp(App)
    // .use(teamUsersRouter)
    .use(vuexStore)
    .mount('#app');
