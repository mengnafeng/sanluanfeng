import Home from "@/view/Home.vue";
import Error from "@/view/Error.vue";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]
export default routes
