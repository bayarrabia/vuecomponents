import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'page6', component: () => import('pages/TheNewsFormPage.vue') },
      { path: 'page7', component: () => import('pages/SepetSayfasi.vue') },
      { path: 'page8', component: () => import('pages/ProductList.vue') },
      { path: 'page9', component: () => import('pages/ThePaymentPage.vue') },
      { path: 'page11', component: () => import('pages/TheFilterPage.vue') },
      {
        path: 'page10',
        component: () => import('pages/ProductComparePage.vue'),
      },
      { path: 'page1', component: () => import('pages/Page1.vue') },
      { path: 'page2', component: () => import('pages/Page2.vue') },
      { path: 'page3', component: () => import('pages/Page3.vue') },
      { path: 'page4', component: () => import('pages/Page4.vue') },
      { path: 'page5', component: () => import('pages/Page5.vue') },
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
