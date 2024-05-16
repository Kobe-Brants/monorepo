import { createRouter, createWebHistory } from 'vue-router';
import UserListView from '../views/UserListView.vue';
import UserDetailsView from '../views/UserDetailsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'user-list',
      component: UserListView,
    },
    {
      path: '/users/:id',
      name: 'user-details',
      component: UserDetailsView,
    },
  ],
})

export default router
