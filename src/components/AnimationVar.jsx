import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ZOOM_IN = {
	hidden: {
		scale: 0.7,
		opacity: 0.7,
	},
	visible: {
		scale: 1,
		opacity: 1,
	},
};
export const ZoomInAnimate = ({ children, className }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	// console.log(className);
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={ZOOM_IN}
			transition={{
				duration: 0.333,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export const L_TO_R = {
	hidden: {
		opacity: 0,
		x: "-50%", // Start from the left
		scale: 0.5, // Initial scale
	},
	visible: {
		opacity: 1,
		x: "0%",
		scale: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut", // Adjust the easing function as needed
			type: "spring",
			bounce: 0.4,
		},
	},
};
export const LtoRspread = ({ children, className }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 100px -50px 0px",
	});
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={L_TO_R}
			className={className}
			viewport={{
				amount: 0.7,
			}}
		>
			{children}
		</motion.div>
	);
};

export const textVariants = {
	hidden: {
		x: "-100%",
		opacity: 0,
	},
	visible: {
		x: "0%",
		opacity: 1,
	},
};

export const charVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export const TextRevealAnim = ({ children, className, delay = 0 }) => {
	// console.log(children);
	const ref = useRef(null);
	const isInView = useInView(ref);
	return (
		<motion.span
			ref={ref}
			className={className}
			variants={textVariants}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			transition={{
				duration: 0.5,
				staggerChildren: 0.1, // Stagger reveal of individual characters
				delay: delay,
			}}
		>
			{children.split("").map((char, index) => (
				<motion.span key={index} variants={charVariants}>
					{char}
				</motion.span>
			))}
		</motion.span>
	);
};

const paragraphTextVariants = {
	hidden: {
		scale: 0.7,
		y: 80,
		opacity: 0,
	},
	visible: {
		scale: 1,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
			type: "spring",
			bounce: 0.5,
		},
	},
};

export const ParaTextAnima = ({ children, className }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	return (
		<motion.p
			ref={ref}
			variants={paragraphTextVariants}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			className={className}
		>
			{children}
		</motion.p>
	);
};

const F_TOP = {
	hidden: {
		// x: "-100%",
		opacity: 0,
	},
	visible: {
		// x: "0",
		opacity: 1,
		transition: {
			duration: 3,
		},
	},
};
export const FromTopAnimationSpan = ({ children, className = "" }) => {
	return (
		<AnimatePresence
			initial={false}
			mode="wait"
			onExitComplete={() => null}
		>
			<motion.span
				variants={F_TOP}
				initial="hidden"
				animate="visible"
				className={className}
				exit={{
					x: "100%",
					opacity: 0,
				}}
				transition={{
					duration: 2,
				}}
			>
				{children}
			</motion.span>
		</AnimatePresence>
	);
};
