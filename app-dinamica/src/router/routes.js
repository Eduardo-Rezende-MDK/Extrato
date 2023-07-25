
const routes = [

  {
    path: '/',
    component: () => import('layouts/LabsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') },
      { path: 'home', component: () => import('pages/home.vue') },
      { path: '/labs1', component: () => import('pages/labs1.vue') },
      { path: '/labs2', component: () => import('pages/labs2.vue') },
      { path: '/labs3', component: () => import('pages/labs3.vue') },
      { path: '/labs4', component: () => import('pages/labs4.vue') },
      { path: '/labs5', component: () => import('pages/labs5.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
