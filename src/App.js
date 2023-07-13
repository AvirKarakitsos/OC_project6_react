import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/styles/App.scss'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Accommodation from './Components/Accommodation';
import Error from './Components/Error';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/about" element={<About/>} />
					<Route path="/accommodation" element={<Accommodation/>} />
					<Route path="/*" element={<Error/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
