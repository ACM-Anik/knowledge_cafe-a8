import React from 'react';
import './SingleBlog.css';

const SingleBlog = (props) => {
    console.log(props.blog)
    const { id, cover_picture, picture, author_name, author_image, title, publish_date, read_time } = props.blog;
    return (
        <div className="border-2 my-5 rounded-lg shadow-sm">
            <div>
                <img className="rounded-lg" style={{height:'500px', width:'100%'}} src={cover_picture} alt="cover picture"/>
            </div>
            <div className="flex justify-between my-4 p-4">
                <div className="flex justify-between gap-5">
                    <div>
                        <img className="w-[42px] h-[42px] rounded-full" src={author_image} alt="" />
                    </div>
                    <div>
                        <h5 className="text-lg font-bold">{author_name}</h5>
                        <p className="text-base font-semibold text-[#11111199]">{publish_date}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-base font-semibold text-[#11111199]">{read_time} min read</p>
                    <label className="text-base font-semibold text-[#11111199]"><i ></i></label>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;