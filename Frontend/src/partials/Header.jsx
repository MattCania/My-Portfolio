import { NavLink, Link } from "react-router-dom"

export default function Header() {
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
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

	return (

		<header
			className='flex justify-end items-center w-3/4 h-10 gap-2 bg-transparent backdrop-blur-3xl overflow-hidden'
		>
			{navigation.map((item, index) => (
				<NavLink
					key={index}
					onClick={() => scrollToSection(item.id)}
					className={({ isActive }) => `${isActive ? 'text-white bg-transparent' : 'backdrop-blur-3xl text-white border-1 border-transparent'} font-medium flex justify-center items-center w-auto px-4 rounded-lg hover:bg-white hover:text-zinc-950 hover:font-medium transition-all duration-300`}
				>
					{item.label}
				</NavLink>
			))}
		</header>

	)

}