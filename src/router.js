import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import ViewContact from './components/ViewContact';
import NewContact from './components/NewContact';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/add', name: 'new-contact', component: NewContact },
        { path: '/:person', name: 'view-contact', component: ViewContact },

    ]
})