import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import './style.css';
import App from './App.vue';

import UserList from './projects/users-and-teams/UserList.vue';
import TeamsList from './projects/users-and-teams/TeamsList.vue';
import TeamMembers from './projects/users-and-teams/TeamMembers.vue';
import NotFound from './projects/users-and-teams/NotFound.vue';
import TeamFooter from './projects/users-and-teams/TeamFooter.vue';
import UsersFooter from './projects/users-and-teams/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamFooter,
            },
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true,
                },
            ],
        },
        // {path: '/teams', component: TeamsList , alias: '/'},
        {
            path: '/users',
            components: {
                default: UserList,
                footer: UsersFooter
            }
        },
        // {path: '/:notFound(.*)', redirect: '/teams'},
        {path: '/:notFound(.*)', component: NotFound},
    ],
    scrollBehavior(to, from, savedPosition){
        if (savedPosition)
            return savedPosition;
        return {left: 0, top: 0};
    }
});

createApp(App).use(router).mount('#app');
