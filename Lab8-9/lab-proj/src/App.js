import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import Home from "./components/Home.js";
import MyNavbar from "./components/MyNavbar.js";

function App() {
	const Mobile = ({ children }) => {
		// mobile screen
		const isMobile = useMediaQuery({ maxWidth: 767 });
		return isMobile ? children : null;
	};
	const Default = ({ children }) => {
		// desktop/laptop/tablet
		const isNotMobile = useMediaQuery({ minWidth: 768 });
		return isNotMobile ? children : null;
	};

	return (
		<Suspense fallback="loading">
			<div className="App">
				<MyNavbar
					mobileScreen={Mobile}
					defaultScreen={Default}
				/>
				<Home mobileScreen={Mobile} defaultScreen={Default} />
			</div>
		</Suspense>
	);
}

export default App;
