import Main from '../containers/Main.vue';

const titleSuffix = '- GDM Product Manager';

export default [
  {
    path: '/login',
    name: 'login.index',
    component: () => import('../views/login'),
    meta: {
      requiresAuth: false,
      label: 'Login',
      title: `Login ${titleSuffix}`,
    },
  },
  // Authenticated/protected routes
  {
    path: '/',
    redirect: '/home',
    name: 'main',
    component: Main,
    meta: {
      requiresAuth: true,
      label: '',
    },
    children: [
      {
        path: '/home',
        name: 'home.index',
        component: () => import('../views/home'),
        meta: {
          requiresAuth: true,
          label: 'Home',
          title: `Home ${titleSuffix}`,
        },
      },
      {
        path: '/products',
        name: 'products.index',
        component: () => import('../views/products'),
        meta: {
          requiresAuth: true,
          label: 'Products',
          title: `Products ${titleSuffix}`,
        },
        children: [
          {
            path: ':id',
            name: 'products.item',
            component: () => import('../views/products/item'),
            meta: { requiresAuth: true },
          },
        ],
      },
    ],
  },

  // Catch-all route
  {
    path: '/*',
    redirect: '/home',
  },
];
