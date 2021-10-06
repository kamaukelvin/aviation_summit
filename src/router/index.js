import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../views/Homepage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Homepage',
		component: Homepage,
	},

	// redirect incase user types navigates to a wrong path route
	{
		path: '*',
		redirect: '/',
	},
];

const router = new VueRouter({
	mode: 'history',
	linkExactActiveClass: 'active',
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	next();
});

export default router;
