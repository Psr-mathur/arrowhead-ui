import { LtoRspread, TextRevealAnim } from "../../components/AnimationVar";

const Section1 = () => {
	return (
		<section className=" h-[calc(100vh-150px)]">
			<div className="h-full flex flex-col gap-7 sm:gap-10 items-center justify-center">
				<h1
					className="mt-2 text-6xl sm:text-8xl font-semibold text-center"
					style={{ fontFamily: "cursive" }}
				>
					<TextRevealAnim>The Jarvis</TextRevealAnim> <br />
					<TextRevealAnim
						delay={1}
						className="lg bg-clip-text text-fill-transparent"
					>
						for your org meetings
					</TextRevealAnim>
				</h1>
				<p className=" text-lg sm:text-2xl text-[#c8c8c8]">
					Not an Iron Man fan? Don’t worry…
				</p>
				<p className=" text-lg sm:text-2xl text-[#c8c8c8] max-w-[475px] text-center">
					We’re saying we’ll be your
					<span className=" font-semibold">
						Generative AI Second Brain
					</span>
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
						className="py-2 px-2 sm:px-3 w-52 sm:w-60 outline-none text-black font-serif"
					/>
					<button className="py-2 px-2 sm:px-4 bg-[#b306af] active:scale-90 transition-all">
						Try Arrowhead
					</button>
				</form>
				<div className="lg p-1 hover:scale-105 transition-all">
					<LtoRspread>
						<button className=" bg-black font-semibold py-2 px-4 active:py-[6px] active:my-[2px] active:px-3 active:mx-1 transition-all">
							<b>+</b> Try Arrowhead
						</button>
					</LtoRspread>
				</div>
			</div>
		</section>
	);
};

export default Section1;
