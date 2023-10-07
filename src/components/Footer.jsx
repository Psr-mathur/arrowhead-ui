import { Link } from "react-router-dom";
import logo from "../assets/Arrowhead_cover_image-removebg-preview-768x207.png";
import { FaTwitter, FaLinkedin, FaRss } from "react-icons/fa";
import {
	IoLocateOutline,
	IoLocationOutline,
	IoMailOutline,
	IoPhonePortraitOutline,
} from "react-icons/io5";
import { LiaLocationArrowSolid } from "react-icons/lia";

const Footer = () => {
	return (
		<div className="py-5 sm:p-10">
			<div className="pb-5 flex sm:hidden items-center justify-between">
				<div className="flex items-end text-2xl font-bold select-none">
					<span className="mb-1 mr-1 h-9 w-8 clip-path bg-gradient-tricolor"></span>
					<span className=" bg-clip-text text-fill-transparent bg-gradient-tricolor">
						RROWHEAD
					</span>
				</div>
				<div className=" flex items-center justify-center gap-6">
					<FaLinkedin className=" text-blue-500 text-3xl" />
					<FaTwitter className="  text-blue-400 text-3xl" />
					<FaRss className=" text-amber-500 text-3xl" />
				</div>
			</div>
			<div className=" flex">
				<div className="p-5 flex-1 hidden sm:flex flex-col gap-4">
					{/* <div className=" w-48 pointer-events-none">
						<img
							src={logo}
							alt="Logo"
							className=" pointer-events-none"
							draggable={false}
						/>
					</div> */}
					<div className="flex items-end text-4xl font-bold select-none">
						<span className="mb-1 mr-1 h-9 w-8 clip-path bg-gradient-tricolor"></span>
						<span className=" bg-clip-text text-fill-transparent bg-gradient-tricolor">
							RROWHEAD
						</span>
					</div>
					<p className=" my-2 text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ullam nemo voluptas quasi, odio ipsam harum cupiditate
						veniam error eaque temporibus aspernatur ipsum aut omnis
						deleniti quia laudantium officiis suscipit numquam.
					</p>
					<div className=" flex items-center justify-center sm:justify-start gap-6">
						<FaLinkedin className=" text-blue-500 text-3xl" />
						<FaTwitter className="  text-blue-400 text-3xl" />
						<FaRss className=" text-amber-500 text-3xl" />
					</div>
				</div>
				<div className="p-2 sm:p-5 flex-1 flex flex-col gap-4 sm:border-l sm:border-r">
					<span className="hidden sm:block font-semibold text-lg sm:text-2xl">
						Useful Links
					</span>
					<div className="px-3 sm:px-6 flex flex-col gap-3 sm:gap-5 text-sm sm:text-base">
						<Link to={"#"}>Home</Link>
						<Link to={"#"}>Support</Link>
						<Link to={"#"}>Privacy Policy</Link>
						<Link to={"#"}>Terms & Conditions</Link>
					</div>
				</div>
				<div className="p-2 sm:p-5 flex-1 flex flex-col gap-4">
					<span className="hidden sm:block font-semibold text-lg sm:text-2xl">
						Contact
					</span>
					<div className="px-3 sm:px-6 flex flex-col gap-3 sm:gap-5 text-sm sm:text-base">
						<div>
							<IoLocationOutline className=" text-lg sm:text-2xl my-1" />
							<span>Gurgaon, Bharat</span>
						</div>
						<div>
							<IoPhonePortraitOutline className=" text-lg sm:text-2xl my-1" />
							<span>+91 8989898989</span>
						</div>
						<div>
							<IoMailOutline className=" text-lg sm:text-2xl my-1" />
							<span>support@arrowhead.team</span>
						</div>
					</div>
				</div>
			</div>
			<p className="py-5 text-center text-xs sm:text-base text-slate-400 italic">
				Crafted with ❤️ by{" "}
				<a
					href="https://idkprakash.onrender.com"
					target="_blank"
					className=" underline bg-gradient-tricolor text-fill-transparent bg-clip-text cursor-pointer"
				>
					Prakash
				</a>
			</p>
		</div>
	);
};

export default Footer;
