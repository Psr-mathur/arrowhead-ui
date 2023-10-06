import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<div className=" bg-black text-white px-16 pt-10">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
