import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/hello'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/hello'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'hello',
        component: () => import('@/views/HelloScreen.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'onboarding',
        component: () => import('@/views/AppOnboarding.vue')
      },
      {
        path: 'auth',
        component: () => import('@/views/auth/AuthMain.vue'),
        meta: { transition: 'slide-left' },
      },
      {
        path: 'auth/email',
        component: () => import('@/views/auth/AuthEmail.vue'),
        meta: { transition: 'slide-left' },
      },
      {
        path: 'auth/email',
        component: () => import('@/views/auth/AuthEmail.vue'),
        meta: { transition: 'slide-left' },
      },
      {
        path: 'sorry',
        component: () => import('@/views/SplashSorry.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'special',
        component: () => import('@/views/SpecialPage.vue')
      },
      {
        path: 'game',
        component: () => import('@/views/GamePage.vue')
      },
      {
        path: 'coinsearn',
        component: () => import('@/views/CoinsEarn.vue')
      },
      {
        path: 'coinsspend',
        component: () => import('@/views/CoinsSpend.vue')
      },
      {
        path: 'livemeeting',
        component: () => import('@/views/LiveMeeting.vue')
      },
      {
        path: 'chats',
        component: () => import('@/views/ChatsList.vue')
      },
      {
        path: 'lookfor',
        component: () => import('@/views/LookforScreen.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      console.log("Loading the next page...");
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  console.log("Loaded the next (current) page.");
  const tabsEl = document.querySelector('ion-tab-bar');
  if (tabsEl) {
    tabsEl.hidden = false;
    tabsEl.style.height = "1";
  }
})

export default router
