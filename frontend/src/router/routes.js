import Index from '~/components/Index/Index.vue';
import SignIn from '~/components/SignIn/SignIn.vue';
import SignUp from '~/components/SignUp/SignUp.vue';

const routes = [
  {
    path: '*',
    name: 'index',
    component: Index,
  },
  {
    path: '/sign_in',
    name: 'signIn',
    component: SignIn,
  },
  {
    path: '/sign_up',
    name: 'signUp',
    component: SignUp,
  },
];

export default routes;
