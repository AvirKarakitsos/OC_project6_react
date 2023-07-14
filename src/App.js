import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/styles/App.scss'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Accommodation from './Components/Accommodation';
import Error from './Components/Error';
import Header from './Components/layouts/Header';
import Footer from './Components/layouts/Footer';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/about" element={<About/>} />
					<Route path="/accommodation/:id" element={<Accommodation/>} />
					<Route path="/*" element={<Error/>} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;
