import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import './style.css';
import App from './App.vue';

import UserList from './projects/users-and-teams/UserList.vue';
import TeamsList from './projects/users-and-teams/TeamsList.vue';
import TeamMembers from './projects/users-and-teams/TeamMembers.vue';
import NotFound from './projects/users-and-teams/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        {path: '/teams', component: TeamsList },
        // {path: '/teams', component: TeamsList , alias: '/'},
        {path: '/users', component: UserList},
        {path: '/teams/:teamId', component: TeamMembers, props: true},
        // {path: '/:notFound(.*)', redirect: '/teams'},
        {path: '/:notFound(.*)', component: NotFound},
    ],
});

createApp(App).use(router).mount('#app');
