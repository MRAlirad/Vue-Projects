import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import './style.css';
import App from './App.vue';

import UserList from './projects/users-and-teams/UserList.vue';
import TeamsList from './projects/users-and-teams/TeamsList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/teams', component: TeamsList},
        {path: '/users', component: UserList},
    ],
});

createApp(App).use(router).mount('#app');
