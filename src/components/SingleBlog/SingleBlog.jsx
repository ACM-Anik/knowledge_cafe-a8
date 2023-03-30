import React from 'react';
import './SingleBlog.css';

const SingleBlog = (props) => {
    console.log(props.blog)
    const { id, cover_picture, picture, author_name, author_image, title, publish_date, read_time } = props.blog;
    return (
        <div className="border border-2 w-[580px]">
            <img src={cover_picture} alt="" />
            <div className="flex justify-between">
                <div>
                    <div>
                        <img src={author_image} alt="" />
                    </div>
                    <div>
                        <h5>{author_name}</h5>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div>
                    <p>{read_time}</p>
                    <label><i ></i></label>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;