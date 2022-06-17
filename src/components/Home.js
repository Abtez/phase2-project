import React, { useState, useEffect } from 'react';
import Blogs from './Blogs';
import Hero from './Hero';

export default function Home() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/posts')
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	function addPost(post){
		const dataHeaders = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Accept: '*'
			},
			body: JSON.stringify(post)
		}

		fetch('http://localhost:3000/posts', dataHeaders)
			.then(res => res.json()).then(data => setBlogs([...blogs, data]))
	}

	return (
		<>
        <Hero addPost={addPost} />

            <div className="container mx-auto grid grid-cols-2 gap-1">
			{blogs.map(blog => {
                return <Blogs key={blog.id} author={blog.author} avatar={blog.avatar} title={blog.title} 
                content={blog.content} image={blog.image} tag={blog.tag} date={blog.date} />
            })}
            </div>
            
		</>
	);
}
