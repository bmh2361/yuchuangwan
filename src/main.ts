import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import { reveal } from './reveal'
import { countup } from './plugins/countup'
import { tilt } from './plugins/tilt'
import { router } from './router'

createApp(App)
	.directive('reveal', reveal)
	.directive('countup', countup)
	.directive('tilt', tilt)
	.use(router)
	.mount('#app')
