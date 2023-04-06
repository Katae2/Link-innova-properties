import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.APP_PATH),
  routes: [
    {
      path: '/Login-admin',
      name: 'Login-admin',
      component: () => import('@/js/pages/Login-admin'),
      meta: {
        title: 'ล็อกอิน',
      }
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/js/pages/Home'),
      meta: {
        title: 'หน้าหลัก',
      }
    },
    {
      path: '/News-and-activities',
      name: 'News-and-activities',
      component: () => import('@/js/pages/News-and-activities'),
      meta: {
        title: 'ข่าวสาร',
      }
    },
    {
      path: '/News-and-activities-read/:id',
      name: 'News-and-activities-read',
      component: () => import('@/js/pages/News-and-activities-read'),
      meta: {
        title: 'ข่าวสาร',
      },
      props:true
    },
    {
      path: '/Current-projects',
      name: 'Current-projects',
      component: () => import('@/js/pages/Current-projects'),
      meta: {
        title: 'โครงการปัจจุบัน',
      }
    },
    {
      path: '/Single-current-project/:id',
      name: 'Single-current-project',
      component: () => import('@/js/pages/Single-current-project'),
      meta: {
        title: 'พันธมิตร',
      },
      props:true
    },
    {
      path: '/Completed-projects',
      name: 'Completed-projects',
      component: () => import('@/js/pages/Completed-projects'),
      meta: {
        title: 'โครงกานสิ้นสุด',
      }
    },
    {
      path: '/Single-completed-project/:id',
      name: 'Single-completed-project',
      component: () => import('@/js/pages/Single-completed-project'),
      meta: {
        title: 'พันธมิตร',
      },
      props:true
    },
    {
      path: '/Our-partner',
      name: 'Our-partner',
      component: () => import('@/js/pages/Our-partner'),
      meta: {
        title: 'พันธมิตร',
      }
    },
    {
      path: '/Join-us',
      name: 'Join-us',
      component: () => import('@/js/pages/Join-us'),
      meta: {
        title: 'พันธมิตร',
      }
    },
    {
      path: '/Details-join-us/:id',
      name: 'Details-join-us',
      component: () => import('@/js/pages/Details-join-us'),
      meta: {
        title: 'พันธมิตร',
      },
      props:true
    },
    {
      path: '/Contact-us',
      name: 'Contact-us',
      component: () => import('@/js/pages/Contact-us'),
      meta: {
        title: 'พันธมิตร',
      }
    },
  ],
  scrollBehavior () {
    window.scrollTo(0,0);
  }
})

router.beforeEach((to, from, next) => {
  next();
});


export default router;