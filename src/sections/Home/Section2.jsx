import gif1 from "../../assets/1-chat-gpt.gif";
import gif2 from "../../assets/2-proactive-insights.gif";
import gif3 from "../../assets/summary-transcript-gif-1-1024x829.gif";
import gif4 from "../../assets/4-org-repo.gif";
import { LtoRspread, ZoomInAnimate } from "../../components/AnimationVar";

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
					<ZoomInAnimate className="sm:w-1/2 h-full gradient-border rounded-3xl">
						<div className=" bg-black p-5 h-full rounded-3xl">
							<img
								src={gif1}
								alt=""
								className=" h-full rounded-3xl"
							/>
						</div>
					</ZoomInAnimate>
					<ZoomInAnimate className="sm:w-[30%] h-full gradient-border rounded-3xl ">
						<div className=" bg-black p-5 h-full rounded-3xl">
							<img
								src={gif2}
								alt=""
								className=" h-full rounded-3xl"
							/>
						</div>
					</ZoomInAnimate>
				</div>
				<div className="my-5 sm:p-5 flex flex-col-reverse sm:flex-row-reverse gap-12 sm:gap-20 items-center justify-center h-max sm:h-[calc(100vh-150px)]">
					<ZoomInAnimate className=" sm:w-[55%] h-full gradient-border rounded-3xl">
						<div className=" bg-black p-5 h-full rounded-3xl">
							<img
								src={gif3}
								alt=""
								className=" h-full rounded-3xl"
							/>
						</div>
					</ZoomInAnimate>
					<ZoomInAnimate className=" sm:w-[25%] h-full gradient-border rounded-3xl ">
						<div className=" bg-black p-5 h-full rounded-3xl">
							<img
								src={gif4}
								alt=""
								className=" h-full rounded-3xl"
							/>
						</div>
					</ZoomInAnimate>
				</div>
			</div>
		</section>
	);
};

export default Section2;
