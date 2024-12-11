import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/about-us',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutUsPage.vue') }],
  },
  {
    path: '/apply-for-loan',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ApplyForLoanPage.vue') }],
  },
  {
    path: '/loan-services',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoanServicesPage.vue') }],
  },
  {
    path: '/repay-loan',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RepayLoanPage.vue') }],
  },
  {
    path: '/faq',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FrequentlyAskedQuestion.vue') }],
  },
  {
    path: '/contact-us',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactUsPage.vue') }],
  },
  {
    path: '/disclaimer',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DisclaimerPage.vue') }],
  },
  {
    path: '/disclosure',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DisclosurePage.vue') }],
  },
  {
    path: '/loan-calculator',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoanCalculatorPage.vue') }],
  },
  {
    path: '/grievance',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/GrievancePage.vue') }],
  },
  {
    path: '/privacy-policy',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PrivacyAndPolicyPage.vue') }],
  },
  {
    path: '/terms-and-conditions',
    component: () => import('/src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TermsAndConditions.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
