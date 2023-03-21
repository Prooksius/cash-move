import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from '@store/index'
import { Provider } from 'react-redux'
import './assets/normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'react-tooltip/dist/react-tooltip.css'
import 'react-phone-number-input/style.css'
import './assets/font.css'
import './assets/flags.css'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>
)
