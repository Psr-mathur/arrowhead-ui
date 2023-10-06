import Layout from "./Layout";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	);
};

export default App;
