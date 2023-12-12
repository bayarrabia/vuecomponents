import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'nev', component: () => import('components/TheNewsForm.vue') },
      { path: 'sepet', component: () => import('pages/SepetSayfasi.vue') },
      { path: 'card', component: () => import('pages/ProductList.vue') },
      { path: 'ode', component: () => import('components/ThePayment.vue') },
      { path: 'filter', component: () => import('components/TheFilter.vue') },
      { path: 'compare', component: () => import('pages/ProductComparePage.vue') },
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