import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';

export default function Form({ addPost }) {

	const [formData, setFormData] = useState({
		author: '',
		avatar: '',
		title: '',
		content: '',
		image: '',
		tag: '',
		date: new Date().toLocaleString()
	})

	function handleInput(event){
		const name = event.target.name
		let value = event.target.value

		setFormData({...formData,
		[name]: value
		})
	}

	function handleSubmit(event){
		event.preventDefault()
		addPost(formData);
		setFormData({
			author: '',
			avatar: '',
			title: '',
			content: '',
			image: '',
			tag: '',
		})
	}

	return (
		<>
			<Container>
				<form onSubmit={handleSubmit} className='w-full max-w-lg'>
					<div className='flex flex-wrap -mx-3 mb-6'>
						<div className='w-full md:w-1/2 px-3 mb-3 md:mb-0'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-first-name'
							>
								Author
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='Your Name'
								required 
								value={formData.author} 
								onChange={handleInput} 
								name='author'
							/>
							<p className='text-red-500 text-xs italic'>
								Please fill out this field.
							</p>
						</div>

						<div className='w-full md:w-1/2 px-3 mb-3 md:mb-0 px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-avatar'
							>
								Avatar
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-avatar'
								type='url'
								placeholder='Avatar'
								required 
								value={formData.avatar} 
								onChange={handleInput} 
								name='avatar'
							/>
							<p className='text-gray-600 text-xs italic'>
								Add your profile picture as URL link..
							</p>
						</div>
					</div>

					<div className='flex flex-wrap -mx-3 mt-4 mb-6'>
						<div className='w-full px-3'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-title'
							>
								Post Title
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-title'
								type='text'
								placeholder='Title'
								required 
								value={formData.title} 
								onChange={handleInput} 
								name='title'
							/>
							<p className='text-gray-600 text-xs italic'>
								Give a very catchy title..
							</p>
						</div>

						<div className='w-full px-3 mt-4'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-desription'
							>
								Description
							</label>
							<textarea
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-desription'
								placeholder='Write something...'
								required 
								value={formData.content} 
								onChange={handleInput} 
								name='content'
							></textarea>
							<p className='text-gray-600 text-xs italic'>
								Make it as long and as crazy as you'd like
							</p>
						</div>

						<div className='w-full px-3 mt-4'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-image'
							>
								Post Image
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-image'
								type='url'
								placeholder='Post Image'
								required 
								value={formData.image} 
								onChange={handleInput} 
								name='image'
							/>
							<p className='text-gray-600 text-xs italic'>
								Add your post image as URL link..
							</p>
						</div>
					</div>
					<div className='flex -mx-3 mb-2'>
						<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								type='text'
								placeholder='#Tag'
								required 
								value={formData.tag} 
								onChange={handleInput} 
								name='tag'
							/>
						</div>

						<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<input
								className='appearance-none block w-full bg-green-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								type='submit'
								value='Submit'
							/>
						</div>
					</div>
				</form>
			</Container>
		</>
	);
}
