import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = ({bookmarked, totalReadTime}) => {
    const [readTime, setReadTime] = useState(0);

    useEffect(() => {
        const getTotalReadTime = localStorage.getItem("totalReadTime"); 
        if(getTotalReadTime === null){
            setReadTime(0);
        }
        else{
          setReadTime(getTotalReadTime);  
        }
    }, [totalReadTime]);

    return (
        <div className="my-6 p-2 md:ps-6 md:pe-0 md:sticky md:top-0">
            <h1 className="text-2xl font-semibold text-[#6047EC] bg-[#6047ec1a] text-center border rounded-lg border-[#6047EC] py-3 px-4">Spent time on read : {readTime} min</h1>
            <div className="mt-6 p-4 rounded-lg bg-[#1111110D]">
                <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookmarked.length}</h1>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Sidebar;