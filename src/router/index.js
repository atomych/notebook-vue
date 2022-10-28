import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmptyPage from "../pages/EmptyPage.vue";
import NotesPage from "../pages/NotesPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "empty",
        name: "empty",
        component: EmptyPage,
      },
      {
        path: "list",
        name: "list",
        component: NotesPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
