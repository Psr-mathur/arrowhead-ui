import React from "react";
import { TextRevealAnim } from "../../components/AnimationVar";

const Section4 = () => {
	return (
		<section className=" my-3 px-2 sm:px-16">
			<div className=" bg-[#1a1a1a] bg-image bg-right">
				<div className="bg-[#1a1a1a75] p-6 sm:p-16">
					<div className="  sm:w-3/4 sm:text-2xl text-justify sm:text-start">
						<p className=" my-3 font-semibold text-2xl sm:text-5xl leading-tight">
							Arrowhead is re-imagining <br /> meetings for the
							new era of work.
						</p>
						<p className=" my-3  underline italic text-slate-400">
							Productivity isn’t something we think about every
							day – but it’s something that affects every single
							thing we do.
						</p>
						<p className=" my-3  text-green-300">
							Take a look at this thought experiment :
						</p>
						<div className=" pl-12 italic sm:text-xl">
							<p className=" my-2">
								<TextRevealAnim>
									An average human today has a life expectancy
									of 70-80 years.
								</TextRevealAnim>
							</p>
							<p className=" my-2">
								<TextRevealAnim delay={1}>
									Of this, we roughly spend a third sleeping,
									20% working, 10% watching TV, 6% driving,
									and 5% eating.
								</TextRevealAnim>
							</p>
							<p className=" my-2">
								<TextRevealAnim delay={2}>
									That leaves us with approximately 18-20
									years to actually “Live our lives!”
								</TextRevealAnim>
							</p>
						</div>
						<p className=" my-3  font-bold sm:text-xl text-slate-400">
							Imagine if you could add another 5 or even 10 years
							to that – THAT is what being more productive means.
						</p>
						<p className=" my-3 sm:text-xl text-slate-400">
							It’s all about achieving <b>MORE</b> output in{" "}
							<b>LESS</b> time.
						</p>
					</div>
					<p className="mt-5 sm:mt-24 text-slate-400 sm:text-2xl">
						If you’d like to bring your team to Arrowhead Request
						Access <b>HERE</b>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Section4;
