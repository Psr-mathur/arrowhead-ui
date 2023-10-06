import { Link } from "react-router-dom";
import logo from "../assets/Arrowhead_cover_image-removebg-preview-768x207.png";

const Navbar = () => {
	return (
		<div className="sticky top-0 flex items-center justify-between pt-2 z-50 bg-black">
			<div className=" w-72 pointer-events-none">
				<img
					src={logo}
					alt="Logo"
					className=" pointer-events-none"
					draggable={false}
				/>
			</div>
			<div className=" flex items-center gap-14 font-semibold ">
				<div className=" flex gap-4 font-bold">
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
			</div>
		</div>
	);
};

export default Navbar;
