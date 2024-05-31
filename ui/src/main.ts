import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
// Define routes
const routes = [
    { path: '/', component: Home }
]
// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Create Vue app
const app = createApp(App)

// Use router
app.use(router)
// Mount app
app.mount('#app')