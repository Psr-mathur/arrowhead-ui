import React, { useState } from "react";
import { motion } from "framer-motion";

const GifContainer = ({ gif, yi = "0%", yf = "-100%", heading, para }) => {
	const [isMouseEnter, setIsMouseEnter] = useState(false);
	return (
		<div
			onMouseEnter={() => setIsMouseEnter(true)}
			onMouseLeave={() => setIsMouseEnter(false)}
			className=" bg-black p-5 h-full rounded-3xl overflow-hidden"
		>
			<div className="relative overflow-hidden h-full rounded-3xl">
				<img src={gif} alt="" className=" h-full rounded-3xl" />
				<motion.div
					className="absolute left-0 right-0 bg-shadow text-white z-10"
					// initial={{ y: "100px" }}
					animate={
						isMouseEnter
							? { color: "smokewhite", y: yf }
							: { color: "white", y: yi }
					}
					transition={{
						duration: 0.5,
					}}
				>
					<h2 className="text-xl font-semibold text-center px-12 py-4">
						{heading}
					</h2>
					<motion.p
						className=" text-center px-12 pb-5"
						animate={isMouseEnter ? { opacity: 1 } : { opacity: 0 }}
					>
						{para}
					</motion.p>
				</motion.div>
			</div>
		</div>
	);
};

export default GifContainer;
