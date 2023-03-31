import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="grid md:grid-cols-6 gap-2">
            <div className="md:col-span-4 mb-8">
                {
                    blogs.map(blog => <SingleBlog blog={blog} key={blog.id}></SingleBlog>)
                }
            </div>
            <div className="md:col-span-2 mb-8">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Blogs;