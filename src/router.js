import Vue from 'vue';
import Router from 'vue-router';
import Frontpage from "./views/Frontpage";
import Forms from "./views/Forms";

Vue.use(Router);
const routes = [
    {path: '/', component: Frontpage},
    {path: '/forms', component: Forms}
];

let router = new Router({
   routes,
   mode: 'history' 
});

export default router;