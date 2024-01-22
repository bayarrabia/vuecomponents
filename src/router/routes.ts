import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'PageMain', component: () => import('pages/PageMain.vue') },
      { path: 'page2', component: () => import('pages/ThePage2.vue') },
      { path: 'page3', component: () => import('pages/ThePage3.vue') },
      { path: 'page4', component: () => import('pages/ThePage4.vue') },
      { path: 'page5', component: () => import('pages/ThePage5.vue') },
      { path: 'page6', component: () => import('pages/TheNewsFormPage.vue') },
      { path: 'page7', component: () => import('pages/SepetSayfasi.vue') },
      { path: 'page8', component: () => import('pages/ProductList.vue') },
      { path: 'page9', component: () => import('pages/ThePaymentPage.vue') },
      { path: 'page10', component: () => import('pages/ProductComparePage.vue') },
      { path: 'page11', component: () => import('pages/TheFilterPage.vue') },
      { path: 'page12', component: () => import('pages/ThePage12.vue') },
      { path: 'page13', component: () => import('pages/ThePage13.vue') },
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
