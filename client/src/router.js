import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/projects",
      component: () => import("@/views/ProjectsPage"),
    },
    {
      path: "/project/:id",
      component: () => import("@/views/ProjectRequestsPage"),
    },
    {
      path: "/project/create",
      component: () => import("@/views/CreateProjectPage"),
    },

    {
      path: "/project/edit/:id",
      component: () => import("@/views/EditProjectPage"),
    },
    {
      path: "/request/create",
      component: () => import("@/views/CreateRequestPage"),
    },
    {
      path: "/request/:id",
      component: () => import("@/views/RequestPage"),
    },
    {
      path: "/request/edit/:id",
      component: () => import("@/views/EditRequestPage"),
    },
  ],
});

export default router;
