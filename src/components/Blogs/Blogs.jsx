import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css';


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [bookmarked, setBookmarked] = useState([]);
    const [totalReadTime, setTotalReadTime] = useState(0);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    const addBookmark = (id) =>{
        const exist = bookmarked.find(marked => marked.id === id);
        if(exist) {
            
            return;
        }
        else{
            const bookmarkedItem = blogs.find(blog => blog.id === id);
            let markedItem = [...bookmarked, bookmarkedItem];
            setBookmarked(markedItem);
        }
    }

    const addReadTime = (readTime) =>{
        // console.log(readTime);
        // setTotalReadTime(totalReadTime + readTime);

        const previousTotalReadTime = JSON.parse(localStorage.getItem("totalReadTime"));

        if(previousTotalReadTime){
            const total = previousTotalReadTime + readTime;
            localStorage.setItem("totalReadTime", total);
            setTotalReadTime(total);
        }
        else{
            localStorage.setItem("totalReadTime", readTime);
            setTotalReadTime(readTime);
        }   
    }

    return (
        <div className="grid md:grid-cols-6 gap-2">
            <div className="md:col-span-4 mb-8">
                {
                    blogs.map(blog => <SingleBlog 
                        blog={blog} 
                        key={blog.id}
                        addBookmark={addBookmark}
                        addReadTime ={addReadTime}
                        ></SingleBlog>)
                }
            </div>
            <div className="md:col-span-2 mb-8">
                <Sidebar totalReadTime={totalReadTime} bookmarked={bookmarked}></Sidebar>
            </div>
        </div>
    );
};

export default Blogs;