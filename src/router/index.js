import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', name: 'home', component: () => import('@/views/MainSite/Home.vue')},
    {path: '/ai-ml', name: 'ai-ml', component: () => import('@/views/MainSite/AI-ML.vue')},
    {path: '/web-dev', name: 'web-dev', component: () => import('@/views/MainSite/Webdev.vue')},
    {path: '/game-dev', name: 'game-dev', component: () => import('@/views/MainSite/Gamedev.vue')},
    {path: '/web-dev/movie-theatre-project', name:'mtp', component: () => import('@/views/MovieTheatreProject/MTP.vue')},
    {path: '/web-dev/movie-theatre-project/showtime/:key/:slug', name: 'Showtime', component: () => import('@/views/MovieTheatreProject/MTPShowtime.vue')},
    {path: '/web-dev/movie-theatre-project/booking', name: 'booking', component: () => import('@/views/MovieTheatreProject/MTPBooking.vue')},
    {path:'/ai-ml/wiki-chatbot-project', name: 'wc', component: () => import('@/views/WikiChat/WCHome.vue')},
    {path: '/ai-ml/wiki-chatbot-project/:articleNameSlug', name:'wcbot', component: () => import('@/views/WikiChat/WCBot.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    // window.scroll({ top: 0, left: 0, behavior: "auto" });
    next()
})

export default router