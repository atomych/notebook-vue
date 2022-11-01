import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmptyPage from "../pages/EmptyPage.vue";
import NotesPage from "../pages/NotesPage.vue";
import WritePage from "../pages/WritePage.vue";
import AuthView from "../views/AuthView.vue";
import EntryPage from "../pages/EntryPage.vue";
import RegPage from "../pages/RegPage.vue";

const routes = [
  {
    path: "/user",
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
      {
        path: "write",
        name: "write",
        component: WritePage,
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
    children: [
      {
        path: "entry",
        name: "entry",
        component: EntryPage,
      },
      {
        path: "reg",
        name: "reg",
        component: RegPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name == "home" && from.name != "entry") {
    next("/auth/entry");
  } else {
    next();
  }
});

export default router;
