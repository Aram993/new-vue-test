import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import Users from "./pages/Users.vue";
import Posts from "./pages/Posts.vue";
import User from "./components/User.vue";
import Post from "./components/Post.vue";
import Comments from "./pages/Comments.vue";
import Comment from "./components/Comment.vue";


const router =  createRouter({
        history: createWebHistory(),
        routes: [
            {path: "/main", component: MainPage, alias: "/"},
            {path: "/users", component: Users},
            {path: "/users/:userId", component: User},
            {path: "/posts", component: Posts},
            {path: "/posts/:postId", component: Post},
            {path: "/comments", component: Comments, meta: {requiresAuth: true}},
            {path: "/comments/:commentId", component: Comment, meta: {requiresAuth: true}}
        ],
        linkActiveClass: "active"
})


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !localStorage.getItem("validate")) {
        alert("Доступ запрешён!");
        next("/main");
    } else {
        next();
    }
})



export default router;