import React from 'react';
import './SingleBlog.css';

const SingleBlog = (props) => {
    // console.log(props.blog);
    const {cover_picture, author_name, author_image, title, publish_date, read_time} = props.blog;
    const addReadTime = props.addReadTime;
    return (
        <div className="border-b-2 my-6 pb-5 rounded-lg ">
            <div>
                <img className="rounded-lg" style={{height:'500px', width:'100%'}} src={cover_picture} alt="cover picture"/>
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
                        <button  className="text-base font-semibold text-[#11111199] px-3"><i >A</i>A</button>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-bold py-2">{title}</h1>
            <p className="py-2 text-[#11111199]">#beginners  #programming</p>
            <button onClick={()=> addReadTime(read_time)} className="py-2 underline text-[#6047EC] hover:text-indigo-700">Mark as read</button>
        </div>
    );
};

export default SingleBlog;