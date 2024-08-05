import logo from "./logo.svg";
import "./App.css";
import Countdown from "./components/countdown/countdown";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h2>
				  Countdown<span className='small'> with</span>
				</h2>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
			<main>
				{/* <TicTacToe /> */}
				<Countdown/>
			</main>
		</div>
	);
}

export default App;
