import gif1 from "../../assets/1-chat-gpt.gif";
import gif2 from "../../assets/2-proactive-insights.gif";
import gif3 from "../../assets/summary-transcript-gif-1-1024x829.gif";
import gif4 from "../../assets/4-org-repo.gif";
import { LtoRspread, ZoomInAnimate } from "../../components/AnimationVar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import GifContainer from "../../components/GifContainer";

const Section2 = () => {
	return (
		<section className="py-5">
			<div>
				<LtoRspread className=" text-3xl sm:text-4xl text-center sm:text-start">
					<span>Incredibly beautiful.&nbsp;</span>
					<br className=" sm:hidden" />
					<span className="text-[#888888]">
						Astonishingly powerful.
					</span>{" "}
					<br />
					<span>Where design meets function.</span>
				</LtoRspread>
				<div className="my-5 sm:p-5 flex flex-col sm:flex-row gap-12 sm:gap-20 items-center justify-center h-max sm:h-[650px]">
					<ZoomInAnimate className="sm:w-1/2 h-full gradient-border rounded-3xl overflow-hidden">
						<GifContainer
							gif={gif1}
							heading={
								"Ask Arrowhead anything about your and your team's meetings"
							}
							para={
								"Stay in the loop on all meetings without actually having to be in them"
							}
						/>
					</ZoomInAnimate>
					<ZoomInAnimate className="sm:w-[30%] h-full gradient-border rounded-3xl ">
						<GifContainer
							gif={gif2}
							heading={
								"Hyper-personalized insights across similar meetings"
							}
							para={
								"User interviews? Investor calls? CSM calls? We'll save you time going through transcripts/notes to connect the dots."
							}
						/>
					</ZoomInAnimate>
				</div>
				<div className="my-5 sm:p-5 flex flex-col-reverse sm:flex-row-reverse gap-12 sm:gap-20 items-center justify-center h-max sm:h-[calc(100vh-150px)]">
					<ZoomInAnimate className=" sm:w-[55%] h-full gradient-border rounded-3xl">
						<GifContainer
							gif={gif3}
							heading={
								"AI auto-generated org knowledge repository"
							}
							para={
								"A timeless knowledge base created for your org without you having to lifting a finger"
							}
						/>
					</ZoomInAnimate>
					<ZoomInAnimate className=" sm:w-[25%] h-full gradient-border rounded-3xl ">
						<GifContainer
							gif={gif4}
							heading={
								"Auto transcribe, summarize and generate action items"
							}
							para={
								"Note-taking was so last-century - focus your energy on what's important"
							}
						/>
					</ZoomInAnimate>
				</div>
			</div>
		</section>
	);
};

export default Section2;
