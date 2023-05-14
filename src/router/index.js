import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', name: 'home', component: () => import('@/views/MainSite/Home.vue')},
    // {path: '/', name: 'blog', component: () => import('@/views/MainSite/Blog.vue')},
    // {path: '/', name: 'tg', component: () => import('@/views/TriviaGame/TGHome.vue')},
    // {path: '/ai-ml', name: 'ai-ml', component: () => import('@/views/MainSite/AIML.vue')},
    // {path: '/web', name: 'web', component: () => import('@/views/MainSite/Web.vue')},
    // {path: '/games', name: 'games', component: () => import('@/views/MainSite/Games.vue')},
    {path: '/movie-theatre-project', name:'mtp', component: () => import('@/views/MovieTheatreProject/MTP.vue')},
    {path: '/movie-theatre-project/showtime/:key/:slug', name: 'Showtime', component: () => import('@/views/MovieTheatreProject/MTPShowtime.vue')},
    {path: '/movie-theatre-project/booking', name: 'booking', component: () => import('@/views/MovieTheatreProject/MTPBooking.vue')},
    {path:'/wiki-chatbot-project', name: 'wc', component: () => import('@/views/WikiChat/WCHome.vue')},
    {path: '/wiki-chatbot-project/:articleNameSlug', name:'wcbot', component: () => import('@/views/WikiChat/WCBot.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    window.scroll({ top: 0, left: 0, behavior: "auto" });
    next()
})

export default router