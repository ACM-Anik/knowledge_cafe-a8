import React, { useEffect, useState } from 'react';
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
        <div>
            {
                blogs.map(blog => <SingleBlog blog={blog} key={blog.id}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;