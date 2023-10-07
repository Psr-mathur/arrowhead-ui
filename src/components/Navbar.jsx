import { Link } from "react-router-dom";
import logo from "../assets/Arrowhead_cover_image-removebg-preview-768x207.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FromTopAnimationSpan } from "./AnimationVar";

const RightPartChildrens = () => {
	return (
		<>
			<div className="flex gap-4 font-bold">
				<Link
					to={"/"}
					className=" py-2 px-4 border-b-[3px] border-transparent focus:border-white active:border-white transition-all"
				>
					Home
				</Link>
				<Link
					to={"#"}
					className=" py-2 px-4 border-b-[3px] border-transparent focus:border-white active:border-white transition-all"
				>
					Blog
				</Link>
			</div>
			<button className=" bg-white text-black py-2 px-3 rounded hover:scale-105 active:scale-95 transition-all">
				We're hiring!
			</button>
		</>
	);
};

const Navbar = () => {
	const mdClass = "hidden sm:flex items-center gap-14 font-semibold ";
	const smClass =
		" absolute top-[100%] z-10 w-full flex items-center justify-between py-2 font-semibold bg-[rgba(0,0,0,0.5)] ";
	const [openmenu, setOpenMenu] = useState(false);
	const toggleOpenMenu = () => setOpenMenu((p) => !p);
	return (
		<div className="sticky top-0 flex items-center justify-between pt-2 z-50 bg-black">
			<div className=" w-48 sm:w-72 pointer-events-none">
				<img
					src={logo}
					alt="Logo"
					className=" pointer-events-none"
					draggable={false}
				/>
			</div>
			<div className={mdClass}>
				<RightPartChildrens />
			</div>
			<div onClick={toggleOpenMenu} className="py-2 px-4 sm:hidden">
				{!openmenu ? (
					<AiOutlineMenu className=" text-2xl" />
				) : (
					<AiOutlineClose className=" text-2xl text-red-300" />
				)}
			</div>
			<AnimatePresence>
				{openmenu && (
					<FromTopAnimationSpan className={smClass}>
						<RightPartChildrens />
					</FromTopAnimationSpan>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Navbar;
