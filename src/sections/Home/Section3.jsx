import React from "react";
import {
	LtoRspread,
	ParaTextAnima,
	TextRevealAnim,
} from "../../components/AnimationVar";

const Section3 = () => {
	return (
		<section className="bg-[#1a1a1a] sm:p-20">
			<div className=" bg-image">
				<div className=" bg-[#1a1a1aa0] flex flex-col items-center justify-center gap-24 h-[480px] ">
					<ParaTextAnima className=" text-5xl sm:text-[80px] font-semibold text-center leading-tight tracking-wide">
						All the information you need at the tips of your
						fingers.
					</ParaTextAnima>
					<div className="lg p-1 hover:scale-105 transition-all">
						<button className=" bg-black font-semibold py-2 px-4 active:py-[6px] active:my-[2px] active:px-3 active:mx-1 transition-all">
							<b>+</b> Try Arrowhead
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section3;
