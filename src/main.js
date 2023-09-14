import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
// import teamUsersRouter from './projects/users-and-teams/routes.js';
import {createStore} from 'vuex';

const counterModule = {
    state()
    {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state)
        {
            state.counter++;
        },
        increase(state, payload)
        {
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context, payload)
        {
            context.commit('increment');
        },
        increase(context, payload)
        {
            setTimeout(() =>
            {
                context.commit('increase', payload);
            }, 2000);
        },
    },
    getters: {
        finalCounter(state)
        {
            return state.counter * 3;
        },
        normalizedCounter(state, getters)
        {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0)
                return 0;
            else if (finalCounter > 100)
                return 100;
            return finalCounter;
        },
    }
};

const authModule = {
    state()
    {
        return {
            isLogedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload)
        {
            state.isLogedIn = payload.isAuth;
        }
    },
    actions: {
        login(context)
        {
            context.commit('setAuth', {isAuth: true});
        },
        logout(context)
        {
            context.commit('setAuth', {isAuth: false});
        },
    },
    getters: {
        userIsAuthenticated(state)
        {
            return state.isLogedIn;
        },
    }
}

const store = createStore({
    modules: {
        counter: counterModule,
        auth: authModule
    },
});



createApp(App)
    // .use(teamUsersRouter)
    .use(store)
    .mount('#app');
