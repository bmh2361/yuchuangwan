import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import { reveal } from './reveal'
import { countup } from './plugins/countup'
import { tilt } from './plugins/tilt'
import { router } from './router'
import { provideI18n } from './i18n'

const app = createApp(App)
	.directive('reveal', reveal)
	.directive('countup', countup)
	.directive('tilt', tilt)
	.use(router)

provideI18n(app)

app.mount('#app')
