export default function Blogs({author, avatar, title, content, image, tag, date}) {
	return (
		<>
				<div className='max-w-sm w-full lg:max-w-full lg:flex my-2'>
					<div
						className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
						style={{
							backgroundImage:
								`url(${image})`,
							height: '300px',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
					<div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal'>
						<div className='mb-8'>
							<p className='text-sm text-gray-600 capitalize flex items-center'>
								<svg
									className='fill-current text-gray-500 w-3 h-3 mr-2'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 490 490'
								>
									<path
										d='M64.333,490h58.401l33.878-137.69h122.259L245.39,490h58.401l33.878-137.69h119.92v-48.162h-108.24l29.2-117.324h79.04
						v-48.162H390.23L424.108,0H365.31l-33.878,138.661H208.79L242.668,0h-58.415l-33.864,138.661H32.411v48.162h106.298l-28.818,117.324
						h-77.48v48.162h65.8L64.333,490z M197.11,186.824h122.642l-29.2,117.324H168.292L197.11,186.824z'
									/>
								</svg>
								{tag}
							</p>
							<div className='text-gray-900 font-bold capitalize text-xl mb-2'>
								{title}
							</div>
							<p className='text-gray-700 text-base'>{content}</p>
						</div>
						<div className='flex items-center'>
							<img
								className='w-10 h-10 rounded-full mr-4'
								src={avatar}
								alt='Avatar of user'
							/>
							<div className='text-sm'>
								<p className='text-gray-900 leading-none'>{author}</p>
								<p className='text-gray-600'>{date}</p>
							</div>
						</div>
					</div>
				</div>
		</>
	);
}
