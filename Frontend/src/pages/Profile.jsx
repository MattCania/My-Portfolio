import React, { useState, useEffect } from 'react';
import ProfileImg from '../assets/profileImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function ProfilePage() {
	const [isInView, setIsInView] = useState({
		welcome: false,
		profile: false,
		projects: false,
		commissions: false,
	});

	// Function to handle the intersection change
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
		// Set up the Intersection Observer
		const observer = new IntersectionObserver(handleSectionInView, {
			root: null, // Uses the viewport as the root
			rootMargin: '0px', // No margin
			threshold: 0.5, // Trigger when 50% of the element is in the viewport
		});

		// Observe all the sections
		const sections = document.querySelectorAll('.section');
		sections.forEach(section => observer.observe(section));

		// Clean up the observer on component unmount
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
		<section className='flex flex-col justify-start items-center w-full min-h-screen bg-zinc-950 overflow-x-hidden'>

			<div
				id='welcome'
				className={`section flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-zinc-950 transition-opacity duration-1000 ${isInView.welcome ? 'opacity-100' : 'opacity-0'}`}
			>
				<h1 className='text-5xl font-bold text-white'>
					Hello
				</h1>
			</div>

			<div
				id='profile'
				className={`section flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-white transition-opacity duration-1000 ${isInView.profile ? 'opacity-100' : 'opacity-0'}`}
			>
				<h1 className='text-5xl font-bold text-black'>
					Hello
				</h1>
			</div>

			<div
				id='projects'
				className={`section flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-zinc-950 transition-opacity duration-1000 ${isInView.projects ? 'opacity-100' : 'opacity-0'}`}
			>
				<h1 className='text-5xl font-bold text-white'>
					Hello
				</h1>
			</div>

			<div
				id='commissions'
				className={`section flex flex-col justify-center items-center h-screen w-full gap-4 flex-shrink-0 bg-white transition-opacity duration-1000 ${isInView.commissions ? 'opacity-100' : 'opacity-0'}`}
			>
				<h1 className='text-5xl font-bold text-black'>
					Hello
				</h1>
			</div>
		</section>
	);
}
