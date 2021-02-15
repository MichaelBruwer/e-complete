import './App.css';
// Header
import Header from './Components/Nav/Header';
import Footer from './Components/Nav/Footer';
import Home from './Components/Pages/Home';
import Cat from './Components/Pages/Cat';
import Checkout from './Components/Pages/Checkout';
import Product from './Components/Pages/Product';
import Test from './Components/Pages/Test';

function App() {
	return (
		<div className='App'>
			<Header />
			<Home />
			<Cat />
			<Product />
			<Checkout />
			{/* <Test /> */}
			<Footer />
		</div>
	);
}

export default App;
