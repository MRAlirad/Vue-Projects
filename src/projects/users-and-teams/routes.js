import {createRouter, createWebHistory} from 'vue-router';
import UserList from './UserList.vue';
import TeamsList from './TeamsList.vue';
import TeamMembers from './TeamMembers.vue';
import NotFound from './NotFound.vue';
import TeamFooter from './TeamFooter.vue';
import UsersFooter from './UsersFooter.vue';

const teamUsersRouter = createRouter({
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

teamUsersRouter.beforeEach((to, from, next) =>
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

teamUsersRouter.afterEach((to, from) =>
{
    // sending analytics data
});

export default teamUsersRouter;