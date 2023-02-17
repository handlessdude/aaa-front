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
        name: routeNames.projects,
        path: 'projects',
        component: () => import('pages/ProjectsPage.vue')
      },
      {
        name: routeNames.applications,
        path: 'applications',
        component: () => import('pages/ApplicationsPage.vue')
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
