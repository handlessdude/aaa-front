import { RouteRecordRaw } from 'vue-router';
import routeNames from 'src/router/route-names';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: routeNames.home,
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        name: routeNames.profile,
        path: 'profile',
        component: () => import('pages/ProfilePage.vue')
      },
      {
        name: routeNames.projects,
        path: 'projects',
        component: () => import('pages/projects/ProjectsPage.vue')
      },
      {
        name: routeNames.newProject,
        path: 'new-project',
        component: () => import('pages/projects/ProjectCreationPage.vue')
      },
      {
        name: routeNames.grants,
        path: 'grants',
        component: () => import('pages/GrantsPage.vue')
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
