import { createRouter, createWebHistory } from 'vue-router'
import JobList from '../components/JobList.vue'
import HomePage from '../components/HomePage.vue'
import JobDetail from '../components/JobDetail.vue';

const routeInfos = [
  {
    path: "/",
    component: HomePage,
  },
  { path: "/jobList", component: JobList },
  { path: '/jobDetail/:id', component: JobDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

export default router
