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
		<div className=" p-10">
			{/* <div className=" flex items-center justify-between">
				<div className=" w-48 pointer-events-none">
					<img
						src={logo}
						alt="Logo"
						className=" pointer-events-none"
						draggable={false}
					/>
				</div>
				<div className="lg p-1 hover:scale-105 transition-all">
					<button className=" bg-black font-semibold py-2 px-4 active:py-[6px] active:my-[2px] active:px-3 active:mx-1 transition-all">
						<b>+</b> Try Arrowhead
					</button>
				</div>
			</div> */}
			<div className=" flex">
				<div className="p-5 flex-1 flex flex-col gap-4">
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
					<p className=" my-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ullam nemo voluptas quasi, odio ipsam harum cupiditate
						veniam error eaque temporibus aspernatur ipsum aut omnis
						deleniti quia laudantium officiis suscipit numquam.
					</p>
					<div className=" flex items-center gap-6">
						<FaLinkedin className=" text-blue-500 text-3xl" />
						<FaTwitter className="  text-blue-400 text-3xl" />
						<FaRss className=" text-amber-500 text-3xl" />
					</div>
				</div>
				<div className="p-5 flex-1 flex flex-col gap-4 border-l border-r">
					<span className=" font-semibold text-2xl">
						Useful Links
					</span>
					<div className="px-6 flex flex-col gap-5">
						<Link to={"#"}>Home</Link>
						<Link to={"#"}>Support</Link>
						<Link to={"#"}>Privacy Policy</Link>
						<Link to={"#"}>Terms & Conditions</Link>
					</div>
				</div>
				<div className="p-5 flex-1 flex flex-col gap-4">
					<span className=" font-semibold text-2xl">Contact</span>
					<div className="px-6 flex flex-col gap-5">
						<div>
							<IoLocationOutline className=" text-2xl my-1" />
							<span>
								Gurgaon,{" "}
								<span className=" text-lg bg-gradient-to-b from-[#FF9933] via-white to-green-500 bg-clip-text text-fill-transparent">
									Bharat
								</span>
							</span>
						</div>
						<div>
							<IoPhonePortraitOutline className=" text-2xl my-1" />
							<span>+91 8989898989</span>
						</div>
						<div>
							<IoMailOutline className=" text-2xl my-1" />
							<span>support@arrowhead.team</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
