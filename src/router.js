import {createWebHistory,createRouter} from 'vue-router'
import HomePage from './components/HomePage.vue'
import WorkoutPage from './components/WorkoutPage.vue'
import NutritionPage from './components/NutritionPage.vue'

const routes = [
    {
        name:'home',
        path:'/',
        component:HomePage
    },
    {
        name:'workout',
        path:'/workout',
        component:WorkoutPage
    },
    {
        name:'nutritionpage',
        path:'/nutrition',
        component:NutritionPage
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;