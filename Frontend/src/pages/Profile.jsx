import React, { useState, useEffect } from 'react';
import ProfileImg from '../assets/profileImg.png';
import PandoraImg1 from '../assets/projects/pandora/PandoraSS1.png'
import GitFit1 from '../assets/projects/gitFit/Gitfit1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight, faForward, faPhone, faWindowMaximize, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Header from '../partials/Header';
import MouseEffect from './MouseEffect';

export default function ProfilePage() {
	const [isHover, setIsHover] = useState(false)
	const [customColor, setCustomColor] = useState(null)
	const [activeDropdown, setActiveDropdown] = useState(null);

	const [isInView, setIsInView] = useState({
		welcomeContent: false,
		profileContent: false,
		projectsContent: false,
		contactsContent: false,
		aboutContent: false,
	});

	const toggleMenu = (index) => {
		setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
	};

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}


	const handleSectionInView = (entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setIsInView(prevState => ({
					...prevState,
					[entry.target.id]: true,
				}));
			} else {
				setIsInView(prevState => ({
					...prevState,
					[entry.target.id]: false,
				}));
			}
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleSectionInView, {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		});

		const sections = document.querySelectorAll('.section');
		sections.forEach(section => observer.observe(section));

		return () => {
			sections.forEach(section => observer.unobserve(section));
		};
	}, []);

	const contacts = [
		{
			link: 'https://www.instagram.com/mattcans/', icon: faInstagram
		},
		{
			link: 'https://www.facebook.com/Matthew.Cania24', icon: faFacebook
		},
		{
			link: 'https://github.com/MattCania', icon: faGithub
		},
		{
			link: 'https://itch.io/dashboard', icon: faItchIo
		},
		{
			link: 'https://www.linkedin.com/in/cania-matthew-gabriel-m-284648306/', icon: faLinkedin
		},
	];

	const navigation = [
		{
			label: 'Profile', id: 'profile'
		},
		{
			label: 'Projects', id: 'projects'
		},
		{
			label: 'Contacts', id: 'contacts'
		},
	]

	const contactBtn = [
		{ label: 'Contacts', icon: faPhone, content: ['639108273132', '639662169452'] },
		{ label: 'Websites', icon: faWindowMaximize, content: ['Gitfit', 'Pandora', 'CrossRoads', 'Pandora 2.0', 'File Converter'] },
		{ label: 'Work', icon: faBuilding, content: ['University Of Caloocan City'] },

	]
	return (
		<section
			className='flex flex-col justify-start items-center w-full min-h-screen bg-zinc-950 overflow-x-hidden scroll-smooth'
		>
			<MouseEffect circleCount={500} circlePx={5} lerp={isHover ? 0.5 : 0.75} isInView={isInView} color={customColor} />
			<Header scrollToSection={scrollToSection} navigation={navigation} isInView={isInView} />
			<div
				id='welcome'
				className={`flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-zinc-950`}
			>

				<div
					id='welcomeContent'
					className={`section flex flex-col ${isInView.welcomeContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 w-1/3 justify-start items-start z-1`}
				>

					<h1
						className={`section text-white font-black text-5xl ${isInView.welcomeContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'} text-6xl font-semibold transition-all duration-[2000ms]`}
					>
						Matthew Cania
					</h1>
					<p
						className={`section flex justify-start items-center gap-2 w-full h-auto text-white text-2xl border-b-1 border-white ${isInView.welcomeContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'} font-semibold transition-all duration-[3000ms]`}
					>
						Full Stack Devloper
						<button
							className='flex justify-center items-center w-6 h-6 cursor-pointer hover:text-teal-400 transition-all duration-300 outline-none'
							onClick={() => scrollToSection('profile')}
							onMouseOver={() => setIsHover(true)}
							onMouseLeave={() => setIsHover(false)}
						>
							<FontAwesomeIcon icon={faAngleDoubleRight} />
						</button>
					</p>
					<div

						className={`section flex justify-start items-center gap-2 ${isInView.welcomeContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'} font-semibold transition-all duration-[4000ms] p-1`}
					>
						{contacts.map((item, index) => (
							<a
								key={index}
								className='flex text-center justify-center items-center text-2xl text-teal-400 rounded-md p-1 hover:bg-teal-400 hover:text-zinc-950 transition-all duration-300'
								onMouseOver={() => setIsHover(true)}
								onMouseLeave={() => setIsHover(false)}
								href={item.link}
							>
								<FontAwesomeIcon icon={item.icon} />
							</a>
						))}
					</div>

				</div>
			</div>

			<div
				id='profile'
				className={`flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-white`}
			>
				<div
					id='profileContent'
					className={`section flex flex-col justify-center items-start w-1/2 ${isInView.profileContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
				>
					<h1
						className={`section ${isInView.profileContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'} text-6xl font-semibold transition-all duration-[2000ms]`}
					>
						I create websites
					</h1>

					<h1
						className={`section ${isInView.profileContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'} text-6xl font-semibold transition-all duration-[3000ms]`}
					>
						That solves
					</h1>
					<h1
						className={`section ${isInView.profileContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'} text-6xl font-semibold transition-all duration-[4000ms]`}
					>
						Real world problems
					</h1>
					<button
						className={`section outline-none flex text-center justify-center items-center my-2 ${isInView.profileContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'} text-4xl font-semibold rounded-xl hover:bg-zinc-950 hover:text-white px-4 cursor-pointer`}
						style={{
							transition: 'transform 4500ms ease, opacity 4500ms ease, color 1000ms ease, background-color 1000ms ease',
							transform: isInView.profileContent ? 'translateY(0)' : 'translateY(-20px)'
						}}
						onClick={() => scrollToSection('projects')}
						onMouseOver={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
					>
						<FontAwesomeIcon icon={faForward} />
					</button>
				</div>
			</div>

			<div
				id='projects'
				className={`flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-zinc-950`}
			>
				<div
					id='projectsContent'
					className={`section flex h-full ${isInView.projectsContent ? 'opacity-100' : 'opacity-0'} w-3/4 transition-all duration-1000`}
				>
					<div
						className={`section flex flex-col justify-center items-center h-full w-full gap-4 ${isInView.projectsContent ? 'opacity-100 transform translate-x-0' : 'opacity-0 translate-x-[-20px]'} transition-all duration-[2000ms]`}
					>
						<div
							className={`section flex justify-start items-center h-1/3 w-full ${isInView.projectsContent ? 'opacity-100 transform translate-x-0' : 'opacity-0 translate-x-[-50px]'} transition-all duration-[3000ms]`}
						>
							<h1
								className='flex justify-center items-center text-5xl w-1/2 h-full rounded-2xl relative text-green-300 border-1 border-green-300 italic font-medium bg-transparent transition-all duration-500'
							>
								Pandora
							</h1>
							<a
								className='w-1/2 h-full absolute'
								href=""
							>

								<img
									className='w-full h-full rounded-xl hover:opacity-0 transition-all duration-500 absolute'
									onMouseOver={() => setCustomColor('#7bf1a8')}
									onMouseLeave={() => setCustomColor(null)}
									src={PandoraImg1}
									alt=""
								/>
							</a>
							<div
								className='flex flex-col w-1/2 p-2'
							>
								<h1
									className='text-3xl text-white font-medium'
								>
									Pandora: Finance Bookkeeping System
								</h1>
								<p
									className='flex flex-col w-full text-white text-xl font-thin'
								>
									A financial bookkeeping website designed for any businesses of any sizes, handles wallet management, inventory, transaction records, statistical analytics and many more.
									<b>
										Made with React JS and NextJS framework along with NodeJS, Sequelize, and MySQL.
									</b>
								</p>
							</div>
						</div>
						<div
							className={`section flex justify-end items-center h-1/3 w-full ${isInView.projectsContent ? 'opacity-100 transform translate-x-0' : 'opacity-0 translate-x-[50px]'} transition-all duration-[3000ms]`}
						>
							<div
								className='flex flex-col w-1/2 p-2'
							>
								<h1
									className='text-3xl text-white font-medium'
								>
									GitFit: Goal Based Management Tool
								</h1>
								<p
									className='flex flex-col w-full text-white text-xl font-thin'
								>
									A health and career management app inspired by GitHub, allowing users to establish health, career, and talent based goals health manager, scheduling system, and progress level of productivity. Promoting work productivity while ensuring your health
									<b>
										Made with React JS and TailwindCSS framework along with NodeJS, Sequelize, and PostgreSQL.
									</b>
								</p>
							</div>
							<h1
								className='flex justify-center items-center text-5xl w-1/2 h-full rounded-2xl relative text-teal-400 border-1 font-thin  border-teal-400 font-mono bg-transparent transition-all duration-500'
							>
								GitFit
							</h1>

							<a
								className='w-1/2 h-full absolute'
								href=""
							>

								<img
									className='w-full h-full rounded-xl hover:opacity-0 transition-all duration-500'
									onMouseOver={() => setCustomColor('#00d5be')}
									onMouseLeave={() => setCustomColor(null)}
									src={GitFit1}
									alt=""
								/>
							</a>
						</div>

					</div>
				</div>
			</div>

			<div
				id='contacts'
				className={`flex justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-white`}
			>
				<div
					id='contactsContent'
					className={`section flex justify-center items-center h-full w-3/4 z-1 ${isInView.contactsContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1500`}
				>
					<div
						id='contactsContent'
						className={`section flex flex-col justify-start items-center w-1/4 h-3/4 ${isInView.contactsContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1500`}
					>
						<img
							className='w-full rounded-full z-1'
							src={ProfileImg}
							alt=""
						/>

						<h1
							className='w-full text-center items-center justify-center text-4xl font-semibold text-black z-1 m-4'
						>
							Matthew Cania
						</h1>
						<ul
							className='flex flex-col justify-start items-start w-full list-disc font-medium z-1'
						>
							<li>matthewgab24@gmail.com</li>
							<li>11647 ph.6 Purok II 6 Area D Brgy.178 Camarin Caloocan City</li>
							<li>
								<a
									href="https://github.com/MattCania"
									className='hover:underline hover:bg-black hover:text-white rounded-sm transition-all duration-500'
									onMouseOver={() => setIsHover(true)}
									onMouseLeave={() => setIsHover(false)}
								>
									https://github.com/MattCania
								</a>
							</li>
						</ul>

					</div>

					<div
						id='contactsContent'
						className={`section border flex flex-col justify-start gap-2 h-3/4 w-3/4 ${isInView.contactsContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
					>
						<div
							id='contactsContent'
							className={`section flex flex-col justify-center w-full border border-pink-500 items-center ${isInView.contactsContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
							style={{
								height: activeDropdown !== null ? '100%' : '6rem',
								transition: 'height 200ms ease'
							}}
						>
							<div
								id='contactsContent'
								className={`section flex justify-around items-center ${isInView.contactsContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
							>
								{contactBtn.map((item, index) => (
									<button
										key={index}
										className='border border-black w-24 h-24'
										onClick={() => toggleMenu(index)}
									>
										<FontAwesomeIcon icon={item.icon} />
									</button>
								))}



							

							</div>

						</div>

							{activeDropdown !== null && (
								<div
									className="flex justify-start items-center w-3/4 h-full gap-10 text-white py-4 px-10 overflow-hidden"
								>
									{contactBtn[activeDropdown].content.map((item, index) => (
										<a key={index} href=''
											className="flex justify-center items-center text-lg w-64 h-48 font-medium transition-all duration-200 rounded-md border-teal-400 border hover:bg-teal-400 hover:text-zinc-950"
										>
											{item}
										</a>
									))}
								</div>
							)}
					</div>
				</div>

			</div>
			
		</section>
	);
}
