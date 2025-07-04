import { createWebHistory, createRouter } from "vue-router";
import List from "@/components/List.vue";
import Detail from "@/components/Detail.vue";
import Author from "@/components/Author.vue";
import Comment from "@/components/Comment.vue";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      { path: "author", component: Author },
      { path: "comment", component: Comment },
    ],
  },
  {
    path: "/asdasd",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
