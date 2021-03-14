import Vue from 'vue';
import Router from 'vue-router';
import Frontpage from "./views/Frontpage";
import Forms from "./views/Forms";
import Traficpage from "./views/Traficpage";

Vue.use(Router);
const routes = [
    {path: '/', component: Frontpage},
    {path: '/forms', component: Forms},
    {path: '/traficpage', component: Traficpage}
];

let router = new Router({
   routes,
   mode: 'history' 
});

export default router;