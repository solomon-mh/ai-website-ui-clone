import { NavLink } from "react-router-dom";
import jibyteLogo from "../assets/logos/jibyte-logo.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLanguage,
	faNavicon,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
	FeaturesPosition as FP,
	FaqPosition as FaQP,
	homePosition as HP,
	HowItWorksPosition as HWP,
	PricingPosition as PP,
	TesttimonialPosition as TP,
} from "../data/scrollPosition";
const Navigation = () => {
	const [scrollPostion, setScrollPosition] = useState(0);
	console.log(useState);
	// console.log(setScrollPosition);
	useEffect(() => {
		const handleSCroll = () => {
			setScrollPosition(window.scrollY);
		};
		window.addEventListener("scroll", handleSCroll);
		return () => window.removeEventListener("scroll", handleSCroll);
	}, []);

	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	const handleBackgroundChange = () => {
		const scrollTheshold = 50;
		if (scrollPostion >= scrollTheshold) {
			return "white";
		} else {
			return "transparent";
		}
	};

	const handleColorChange = () => {
		// changing the nav color when scrolled.
		const scrollTheshold = 50;
		if (scrollPostion <= scrollTheshold) {
			return "white";
		} else {
			return "black";
		}
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		setMenuOpen(false);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header>
			<div
				style={{
					backgroundColor: handleBackgroundChange(),
					color: handleColorChange(),
				}}
				className="navigation transition-all duration-700 fixed w-full z-50 flex justify-between items-center border-1 border-gray-400 shadow-xl py-4 px-6"
			>
				<div className="logo">
					<img src={jibyteLogo} alt="jibyteAI-logo" />
				</div>
				<div className="navs hidden lg:block ml-16">
					<nav className="">
						<button
							onClick={() => scrollToSection("Hero")}
							className={`${
								HP.min <= scrollPostion && scrollPostion <= HP.max
									? "bg-simpleLightGray"
									: ""
							}
              navlinks`}
						>
							Home
						</button>
						<button
							onClick={() => scrollToSection("Features")}
							className={`${
								FP.min <= scrollPostion && scrollPostion <= FP.max
									? "bg-simpleLightGray"
									: ""
							}
              navlinks`}
						>
							Features
						</button>
						<button
							onClick={() => scrollToSection("HowItWorks")}
							className={`
            ${
							HWP.min <= scrollPostion && scrollPostion <= HWP.max
								? "bg-simpleLightGray"
								: ""
						}
            navlinks`}
						>
							How it Works
						</button>
						<button
							onClick={() => scrollToSection("Testimonial")}
							className={`${
								TP.min <= scrollPostion && scrollPostion <= TP.max
									? "bg-simpleLightGray"
									: ""
							}
              navlinks`}
						>
							Testimonial
						</button>
						<button
							onClick={() => scrollToSection("Pricing")}
							className={`${
								PP.min <= scrollPostion && scrollPostion <= PP.max
									? "bg-simpleLightGray"
									: ""
							}
              navlinks`}
						>
							Pricing
						</button>
						<button
							onClick={() => scrollToSection("FAQ")}
							className={`${
								FaQP.min <= scrollPostion && scrollPostion <= FaQP.max
									? "bg-simpleLightGray"
									: ""
							}
              navlinks`}
						>
							FAQ
						</button>
					</nav>
				</div>
				<div className="contact-us flex items-center mx-12 lg:mx-4">
					<div className="lang">
						<button className="lang-btn hidden md:inline-block contact-links border-1 border-black">
							<FontAwesomeIcon
								icon={faLanguage}
								style={{ padding: "5px", marginTop: "2px" }}
							/>
						</button>
						{/* language pop-up */}
						<div className="lang-pop-up bg-slate-50 text-slate-800 rounded-xl">
							<ul>
								<li className="text-base cursor-pointer py-2 px-3 pr-7 hover:bg-slate-200">
									<span className="text-sm mx-1">uz</span>o&rsquo;zbekcha
								</li>
								<hr className="bg-slate-400" />
								<li className="text-base cursor-pointer py-2 px-3 pr-7 hover:bg-slate-200">
									<span className="text-sm mx-1">GB</span>English
								</li>
							</ul>
						</div>
					</div>

					<button className="contact-links border-1 py-2 px-3 border-gray-400 hover:border-transparent">
						Sign In
					</button>
					<button className="contact-links py-2 px-3 border-1 border-gray-400 hover:border-transparent">
						Join Hub
					</button>
				</div>

				<div
					onClick={toggleMenu}
					className="lg:hidden bg-purple-300 bg-opacity-20 text-black text-xl absolute right-8 border-1 border-transparent py-1 px-2.5  rounded-full"
				>
					{menuOpen ? (
						<FontAwesomeIcon icon={faTimes} />
					) : (
						<FontAwesomeIcon icon={faNavicon} />
					)}
				</div>
			</div>
			{menuOpen && (
				<div className="lg:block">
					<nav className="overlay bg-slate-700 py-4 text-white flex flex-col -my-3">
						<button
							onClick={() => scrollToSection("Hero")}
							className="mx-4 py-1 my-1 px-5 text-left hover:bg-gray-600 rounded-sm duration-300"
						>
							Home
						</button>
						<button
							onClick={() => scrollToSection("Features")}
							className="mx-4 py-1 my-1 px-5 text-left hover:bg-gray-600 rounded-sm duration-300"
						>
							Features
						</button>
						<button
							onClick={() => scrollToSection("HowItWorks")}
							className="mx-4 py-1 my-1 px-5 text-left hover:bg-gray-600 rounded-sm duration-300"
						>
							How it Works
						</button>
						<button
							onClick={() => scrollToSection("Testimonial")}
							className="mx-4 py-1 my-1 px-5 text-left hover:bg-gray-600 rounded-sm duration-300"
						>
							Testimonial
						</button>
						<button
							onClick={() => scrollToSection("Pricing")}
							className="mx-4 py-1 my-1 px-5 text-left hover:bg-gray-600 rounded-sm duration-300"
						>
							Pricing
						</button>
						<button
							onClick={() => scrollToSection("FAQ")}
							className="mx-4 py-1 my-1 px-5 text-left hover:bg-gray-600 rounded-sm duration-300"
						>
							FAQ
						</button>
						<div className="md:hidden">
							<hr className="bg-slate-400 my-2" />
							<NavLink className="mx-4 py-1 my-1 px-5">
								<FontAwesomeIcon icon={faLanguage} />
								<span className="mx-2">Languages</span>
							</NavLink>
							<p className="mx-4 py-1 my-1 px-5 hover:bg-slate-800">
								<span className="text-xs mx-1">GB</span>English
							</p>
							<p className="mx-4 py-1 my-1 px-5 hover:bg-slate-800">
								<span className="text-xs mx-1">uz</span>o&rsquo;zbekcha
							</p>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Navigation;
