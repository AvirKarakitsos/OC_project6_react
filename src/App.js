import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Accommodation from './Components/Home/Accommodation';
import Error from './Components/Error';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/about" element={<About/>} />
				<Route path="/accommodation/:id" element={<Accommodation/>} />
				<Route path="/*" element={<Error/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
