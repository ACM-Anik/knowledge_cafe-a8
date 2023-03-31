import React from 'react';
import './SingleBlog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons';


const SingleBlog = (props) => {
    // console.log(props.blog);
    const {id, cover_picture, author_name, author_image, title, publish_date, read_time} = props.blog;
    const addReadTime = props.addReadTime;
    const addBookmark = props.addBookmark;

    return (
        <div className="border-b-2 my-6 pb-5 p-2 rounded-lg ">
            <div>
                <img className="rounded-lg " style={{height:'60%', width:'100%'}} src={cover_picture} alt="cover picture"/>
            </div>
            <div className="flex justify-between py-2">
                <div className="flex justify-between gap-5 py-2">
                    <div>
                        <img className="w-[50px] h-[50px] rounded-full" src={author_image} alt="" />
                    </div>
                    <div>
                        <h5 className="text-lg font-bold">{author_name}</h5>
                        <p className="text-base font-semibold text-[#11111199]">{publish_date}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <p className="text-base font-semibold text-[#11111199]">{read_time} min read</p>
                    <div>
                        <button onClick={() => addBookmark(id)}  className="text-base font-semibold text-[#11111199] px-3"><FontAwesomeIcon icon={faBookBookmark} /></button>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-bold py-2">{title}</h1>
            <p className="py-2 text-[#11111199]">#beginners  #programming</p>
            <button onClick={() => addReadTime(read_time)} className="py-2 underline text-[#6047EC] hover:text-indigo-700">Mark as read</button>
        </div>
    );
};

export default SingleBlog;