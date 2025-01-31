import ProfileImg from '../assets/profileImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function ProfilePage() {

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
	]

	return (
		<section
  			className="flex flex-col flex-grow justify-start items-center w-full py-4 gap-4 overflow-x-hidden overflow-y-auto"
		>

			<div
				className="flex flex-col justify-center items-center w-4/5 gap-4 flex-shrink-0"
			>
				<div
					className='flex flex-col justify-center items-center h-auto w-auto overflow-hidden p-4 flex-shrink-0'
				>
					<img
						className='flex w-64 h-64 rounded-full'
						draggable="false"
						src={ProfileImg}
						alt=""
					/>
				</div>

				<div
					className='flex justify-center items-center h-12 w-3/4 gap-2 '
				>

					{contacts.map((item, index) => (
						<a
							className='flex justify-center items-center w-10 h-10 text-center mx-2 text-teal-400 text-4xl rounded-xl hover:text-zinc-950 hover:bg-teal-400 transition-all duration-300'
							key={index}
							href={item.link}
						>
							<FontAwesomeIcon icon={item.icon} />
						</a>
					))
					}
				</div>

				<div
					className='flex flex-col justify-start items-center w-3/4 h-1/3 border-1 border-double border-teal-400 rounded-2xl p-2 shadow-md shadow-teal-400'
				>

					<h1
						className='flex justify-center text-center items-center text-teal-400 font-medium text-5xl m-2'
					>
						Matthew Cania
					</h1>
					<p
						className='flex justify-center h-auto w-3/4 items-start text-center m-2 text-white text-xl font-medium'
					>
						Aspiring Full Stack Developer specializing in Frontend Development. Currently Studying at University of Caloocan City
					</p>

				</div>

				<div
					className='flex flex-col justify-start items-center w-3/4 h-auto border-1 border-double border-teal-400 rounded-2xl p-2 shadow-md shadow-teal-400 flex-shrink-0'
				>

				</div>
			</div>
		</section>
	)

}