import React, { useEffect, useState } from 'react';
import './Blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])

    return (
        <div>
            <h2>blogs</h2>
        </div>
    );
};

export default Blogs;