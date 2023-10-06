import React from "react";
import gif1 from "../assets/1-chat-gpt.gif";
import gif2 from "../assets/2-proactive-insights.gif";
import gif3 from "../assets/summary-transcript-gif-1-1024x829.gif";
import gif4 from "../assets/4-org-repo.gif";

const Home = () => {
	return (
		<>
			<section className=" h-[calc(100vh-150px)]">
				<div className="h-full flex flex-col gap-10 items-center justify-center">
					<h1
						className=" text-8xl font-semibold text-center"
						style={{ fontFamily: "cursive" }}
					>
						The Jarvis <br />
						<span className="lg bg-clip-text text-fill-transparent">
							for your org meetings
						</span>
					</h1>
					<p className=" text-2xl text-[#c8c8c8]">
						Not an Iron Man fan? Don’t worry…{" "}
					</p>
					<p className=" text-2xl text-[#c8c8c8] w-[475px] text-center">
						We’re saying we’ll be your{" "}
						<span className=" font-semibold">
							Generative AI Second Brain
						</span>{" "}
						for all your org’s meetings
					</p>
					<form
						onSubmit={(e) => e.preventDefault()}
						className=" flex items-center"
					>
						<input
							type="email"
							placeholder="Email"
							required
							className="py-2 px-3 w-60 outline-none text-black font-serif"
						/>
						<button className="py-2 px-4 bg-[#b306af] active:scale-90 transition-all">
							Try Arrowhead
						</button>
					</form>
					<div className="lg p-1 hover:scale-105 transition-all">
						<button className=" bg-black font-semibold py-2 px-4 active:py-[6px] active:my-[2px] active:px-3 active:mx-1 transition-all">
							<b>+</b> Try Arrowhead
						</button>
					</div>
				</div>
			</section>
			<section className="py-5">
				<div>
					<p className=" text-4xl ">
						Incredibly beautiful.
						<span className="text-[#888888]">
							Astonishingly powerful.
						</span>{" "}
						<br />
						Where design meets function.
					</p>
					<div className="my-5 p-5 flex gap-20 items-center justify-center h-[650px]">
						<div className=" w-1/2 h-full gradient-border rounded-3xl">
							<div className=" bg-black p-5 h-full rounded-3xl">
								<img
									src={gif1}
									alt=""
									className=" h-full rounded-3xl"
								/>
							</div>
						</div>
						<div className=" w-[30%] h-full gradient-border rounded-3xl ">
							<div className=" bg-black p-5 h-full rounded-3xl">
								<img
									src={gif2}
									alt=""
									className=" h-full rounded-3xl"
								/>
							</div>
						</div>
					</div>
					<div className="my-5 p-5 flex flex-row-reverse gap-20 items-center justify-center h-[calc(100vh-150px)]">
						<div className=" w-[55%] h-full gradient-border rounded-3xl">
							<div className=" bg-black p-5 h-full rounded-3xl">
								<img
									src={gif3}
									alt=""
									className=" h-full rounded-3xl"
								/>
							</div>
						</div>
						<div className=" w-[25%] h-full gradient-border rounded-3xl ">
							<div className=" bg-black p-5 h-full rounded-3xl">
								<img
									src={gif4}
									alt=""
									className=" h-full rounded-3xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-[#1a1a1a] sm:p-20">
				<div className=" bg-image">
					<div className=" bg-[#1a1a1aa0] flex flex-col items-center justify-center gap-24 h-[480px] ">
						<p className=" text-[80px] font-semibold text-center leading-tight tracking-wide">
							All the information you need at the tips of your
							fingers.
						</p>
						<div className="lg p-1 hover:scale-105 transition-all">
							<button className=" bg-black font-semibold py-2 px-4 active:py-[6px] active:my-[2px] active:px-3 active:mx-1 transition-all">
								<b>+</b> Try Arrowhead
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className=" my-3 px-16">
				<div className=" bg-[#1a1a1a] bg-image bg-right">
					<div className="bg-[#1a1a1a75] p-16">
						<div className="  w-3/4 text-2xl">
							<p className=" my-3  font-semibold text-5xl leading-tight">
								Arrowhead is re-imagining <br /> meetings for
								the new era of work.
							</p>
							<p className=" my-3  underline italic text-slate-500">
								Productivity isn’t something we think about
								every day – but it’s something that affects
								every single thing we do.
							</p>
							<p className=" my-3  text-green-300">
								Take a look at this thought experiment :
							</p>
							<div className=" pl-12 italic text-xl">
								<p className=" my-2">
									An average human today has a life expectancy
									of 70-80 years.
								</p>
								<p className=" my-2">
									Of this, we roughly spend a third sleeping,
									20% working, 10% watching TV, 6% driving,
									and 5% eating.
								</p>
								<p className=" my-2">
									That leaves us with approximately 18-20
									years to actually “Live our lives!”
								</p>
							</div>
							<p className=" my-3  font-bold text-xl text-slate-500">
								Imagine if you could add another 5 or even 10
								years to that – THAT is what being more
								productive means.
							</p>
							<p className=" my-3 text-xl text-slate-500">
								It’s all about achieving <b>MORE</b> output in{" "}
								<b>LESS</b> time.
							</p>
						</div>
						<p className=" mt-24 text-slate-600 text-2xl">
							If you’d like to bring your team to Arrowhead
							Request Access <b>HERE</b>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
