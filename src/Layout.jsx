import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<div className=" bg-black text-white px-4 sm:px-16 pt-10">
			<Navbar />
			<div className=" overflow-hidden">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
