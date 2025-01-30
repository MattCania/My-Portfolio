import ProfileImg from '../assets/profileImg.png'

export default function ProfilePage() {

	return (
		<section
			className="flex flex-col justify-start items-center h-screen w-full py-4 gap-4 overflow-x-hidden overflow-y-auto"
			style={{height:"100vh"}}
		>

			<div
				className='flex flex-col justify-center items-center h-auto w-auto overflow-hidden p-4'
			>
				<img
					className='flex w-64 h-64 rounded-full'
  					draggable="false"
					src={ProfileImg} 
					alt=""
				/>
				<h1
					className='flex justify-center text-center items-center text-teal-400 font-medium text-4xl'
				>
					Matthew Cania
				</h1>
			</div>

			<div
				className='flex'
			>


			</div>


		</section>
	)

}