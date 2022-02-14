import VueRouter from "vue-router";
import Protected from "./layouts/Protected";
import Public from "./layouts/Public";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = [
    {
        path: "/",
        component: Public,
        children: [
            {
                path: "/",
                component: Login,
            },
            {
                path: "/register",
                component: Register,
            },
        ],
    },
    {
        path: "/app",
        component: Protected,
        children: [
            {
                path: "/dashboard",
                component: Dashboard,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
