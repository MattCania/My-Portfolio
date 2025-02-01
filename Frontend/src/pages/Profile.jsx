import React, { useState, useEffect } from 'react';
import ProfileImg from '../assets/profileImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../partials/Header';
import MouseEffect from './MouseEffect';

export default function ProfilePage() {
	const [isHover, setIsHover] = useState(false)

	const [isInView, setIsInView] = useState({
		welcomeContent: false,
		profileContent: false,
		projectsContent: false,
		commissionsContent: false,
		aboutContent: false,
	});

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}

	const navigation = [
		{
			label: 'Profile', id: 'profile'
		},
		{
			label: 'Projects', id: 'projects'
		},
		{
			label: 'Commissions', id: 'commissions'
		},
	]

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

	return (
		<section
			className='flex flex-col justify-start items-center w-full min-h-screen bg-zinc-950 overflow-x-hidden scroll-smooth'
			>
			<MouseEffect circleCount={500} circlePx={5} lerp={isHover ? 0.1 : 0.9} isInView={isInView}/>
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
				</div>
			</div>

			<div
				id='projects'
				className={`flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-zinc-950`}
			>
				<div
					id='projectsContent'
					className={`section flex ${isInView.projectsContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
				>


					<div
						className={`section ${isInView.projectsContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'} text-6xl font-semibold transition-all duration-[2000ms] text-white`}
					>
						I create websites
					</div>
				</div>
			</div>

			<div
				id='commissions'
				className={`flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-white`}
			>
				<div
					id='commissionsContent'
					className={`section flex ${isInView.commissionsContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
				>
					<h1 className='text-5xl font-bold text-black'>
						Hello
					</h1>
				</div>
			</div>
		</section>
	);
}
