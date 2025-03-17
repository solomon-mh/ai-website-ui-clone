import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import whiteJiByteLogo from "../assets/logos/white-jibyte-ai-logo.svg";
import "../styles/HalfMoon.css";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
	return (
		<div className="moon-shape text-center px-44 py-20">
			<div className="flex justify-center text-white font-semibold items-center">
				<button className="py-1 px-4 bg-slate-800 text-xs  rounded-xl mx-2">
					JIBYTE AI
				</button>
				<p className="text-xs font-mono">
					ENJOY IT EVERY MONTH WITH YOUR SUBSCRIPTION.
				</p>
			</div>
			<div className="div md:w-1/3 m-auto text-white">
				<h1 className="text-7xl text-white py-4">
					<span className="opacity-70">Sta</span>rt your free plan.
				</h1>
				<p className="opacity-60">
					Unlock your business potential by letting the AI work and generate
					money for you.
				</p>
			</div>
			<button className="py-4 px-8 bg-neutral-800 text-white font-semibold rounded-xl my-16 duration-300 hover:bg-white hover:text-black hover:scale-105">
				Join Our Community
				<FontAwesomeIcon className="px-1" icon={faBolt} />
			</button>
			<hr className="w-full h-4 opacity-40 " />
			<div className="div text-white flex justify-around py-8">
				<div className="logo text-white">
					<img src={whiteJiByteLogo} alt="" />
				</div>
				<div className="icon flex items-center">
					<FontAwesomeIcon icon={faInstagram} />
					<p className="px-4">instagram</p>
				</div>
			</div>
			<hr className="w-4/5 h-4 m-auto opacity-40" />
			<article className="my-3">
				<a
					className="text-blue-700 font-bold"
					target="_blank"
					rel="noopener noreferrer"
					href="https://solomommuhye.netlify.app/"
				>
					<span>Cloned By: Solomon M.</span>
				</a>
			</article>
		</div>
	);
};

export default Footer;
