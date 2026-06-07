import { createRouter, createWebHistory } from "vue-router";
import LocaleLayout from '../views/LocaleLayout.vue'
import Home from "@/views/Home.vue";
import Articles from "@/views/Articles.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import Notice from "@/views/Notice.vue";

const routes = [
    {
        path: '/:locale(fr|en)?',
    	component: LocaleLayout,
		children : [
			{
				path: '',
				name: 'home',
				component: Home
			},
			{
				path: 'articles',
				name: 'articles',
				component: Articles
			},
			{
				path: 'article/:id/:slug?',
				name: 'article-detail',
				component: ArticleDetail
			},
			{
				path: 'mentions',
				name: 'notice',
				component: Notice
			},
		]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
	scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
