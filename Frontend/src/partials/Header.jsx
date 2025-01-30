import { NavLink, Link } from "react-router-dom"

export default function Header() {

	const navigation = [
		{
			label: 'Profile', link: '/profile'
		},
		{
			label: 'Projects', link: '/projects'
		},
		{
			label: 'Commissions', link: '/commissions'
		},
	]

	return (

		<header
			className='flex justify-center items-center w-full border-b-1 border-b-teal-400 gap-2 bg-zinc-950 fixed'
			style={{height: "2.5rem"}}
		>
			{navigation.map((item, index) => (
				<NavLink
					key={index}
					to={`${item.link}`}
					className={({ isActive }) => `${isActive ? 'border-1 border-teal-400 text-teal-400' : 'bg-transparent text-white border-1 border-transparent'} flex justify-center items-center w-auto px-4 rounded-lg hover:bg-zinc-950 hover:text-teal-400 transition-all duration-300`}
				>
					{item.label}
				</NavLink>
			))}
		</header>

	)

}