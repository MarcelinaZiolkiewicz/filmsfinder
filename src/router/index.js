import Vue from "vue"
import Router from 'vue-router'
import SingleFilmPage from "@/components/SingleFilmPage";
import SearchPage from "@/components/SearchPage";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Search',
            component: SearchPage
        },
        {
            path: '/film/:id',
            name: 'Film',
            component: SingleFilmPage
        }
    ]
})