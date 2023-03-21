import { HomePage } from '@pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes location={window.location}>
				<Route path="/" element={<HomePage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
