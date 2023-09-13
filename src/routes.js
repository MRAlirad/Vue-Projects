import {createRouter, createWebHistory} from 'vue-router';
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
            meta: {needsAuth: true},
            components: {
                default: TeamsList,
                footer: TeamFooter,
            },
            beforeEnter(to, from, next)
            {
                next();
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
    scrollBehavior(to, from, savedPosition)
    {
        if (savedPosition)
            return savedPosition;
        return {left: 0, top: 0};
    }
});

router.beforeEach((to, from, next) =>
{
    // console.log(to, from)
    // if (to.name === 'team-members')
    //     next();
    // else
    //     next({name: 'team-members', params: {teamId: 't2'}});
    // next(false);

    if (to.meta.needsAuth)
        console.log('needs auth!');

    next(true);
});

router.afterEach((to, from) =>
{
    // sending analytics data
});

export default router;