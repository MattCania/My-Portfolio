import { NavLink, Link } from "react-router-dom"

export default function Header({scrollToSection, navigation}) {
	return (

		<header
			className='flex justify-end items-center w-3/4 h-10 gap-2 bg-transparent overflow-hidden fixed'
		>
			{navigation.map((item, index) => (
				<NavLink
					key={index}
					onClick={() => scrollToSection(item.id)}
					className={({ isActive }) => `${isActive ? 'text-teal-400 bg-transparent' : 'text-black bg-transparent'} font-medium flex justify-center items-center w-auto px-4 rounded-lg hover:bg-teal-400 hover:text-zinc-950 hover:font-medium transition-all duration-300`}
				>
					{item.label}
				</NavLink>
			))}
		</header>

	)

}