import React, { useState, useEffect } from 'react';
import ProfileImg from '../assets/profileImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../partials/Header';

export default function ProfilePage() {
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
			<Header scrollToSection={scrollToSection} navigation={navigation}/>
			<div
				id='welcome'
				className={`flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-zinc-950`}
			>
				<div
					id='welcomeContent'
					className={`section flex flex-col ${isInView.welcomeContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 w-1/3 justify-start items-start`}
				>
					<h1 className='text-5xl font-bold text-white'>
						Matthew Cania
					</h1>
					<p
						className='flex justify-start items-center gap-2 w-full h-auto text-white text-2xl border-b-1 border-white '
					>
						Full Stack Devloper
						<button 
							className='flex justify-center items-center w-6 h-6 cursor-pointer hover:text-teal-400 transition-all duration-300 outline-none'
							onClick={() => scrollToSection('profile')}
						>
							<FontAwesomeIcon icon={faAngleDoubleRight}/>
						</button>
					</p>
					<div 
						className='flex justify-start items-center w-full p-1 gap-2'
					>
						{contacts.map((item, index) => (
							<a 
								key={index}	
								className='flex text-center justify-center items-center text-2xl text-teal-400 rounded-md p-1 hover:bg-teal-400 hover:text-zinc-950 transition-all duration-300'
								href={item.link}
							>
								<FontAwesomeIcon icon={item.icon}/>
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
					className={`section flex flex-col justify-center items-center w-3/4 ${isInView.profileContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
				>
					<h1 
						className='text-5xl font-bold text-black'>
						Hello
					</h1>
					<p
						className={`section ${isInView.profileContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[1500ms]`}
					>
						World
					</p>
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


					<h1 className='text-5xl font-bold text-white'>
						Hello
					</h1>
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
