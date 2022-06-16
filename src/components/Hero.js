import React, { useState } from 'react';
import Form from './Form';

export default function Hero() {
	const [showForm, setShowForm] = useState(false);

	function toggleForm() {
		setShowForm((showForm) => !showForm);
	}

	return (
		<>
			<div className='w-full bg-white shadow-2xl rounded-lg mx-auto text-center py-12'>
				<h2 className='text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10 mb-5'>
					Welcome To Your Personalised Random Blog...
				</h2>
				{showForm ? <Form /> : false}
				<div className='mt-8 flex justify-center'>
					<div className='inline-flex rounded-md bg-blue-500 shadow'>
						<button
							onClick={toggleForm}
							type='button'
							className='text-gray-200 font-bold py-2 px-6'
						>
							{showForm ? 'Hide Form' : 'Make a post'}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
