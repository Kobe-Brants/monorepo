import { createRouter, createWebHistory } from 'vue-router';
import UserListView from '../views/UserListView.vue';
import UserDetailsView from '../views/UserDetailsView.vue';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/users',
      name: 'user-list',
      component: UserListView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/users/:id',
      name: 'user-details',
      component: UserDetailsView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
