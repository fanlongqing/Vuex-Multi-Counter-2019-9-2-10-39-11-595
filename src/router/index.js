import Router from 'vue-router';
import Vue from 'vue';
import Welcome from '../components/Welcome.vue';
import MultiCounter from '../components/MultiCounter.vue';
import InputForm from '../components/InputForm.vue'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/welcome",
            component: Welcome
        },
        {
            path: "/counter",
            component: MultiCounter
        },
        {
            path: "/toDoList",
            redirect: "/"
        },
        {
            path: "/welcome/:username",
            component: Welcome,
            props: true,
            children:[{
                path:'counter',
                name:'counter',
                component:MultiCounter
            },
            {
                path:'todo-list',
               name:'toDoList',
               redirect:"/"

            } 
            ]
        },
        {
            path: "/",
            component: InputForm
        },
        

    ]
})
