import React, { useEffect, useState } from 'react';

const Sidebar = ({totalReadTime}) => {
    const [readTime, setReadTime] = useState(0);

    useEffect(() => {
        const getTotalReadTime = localStorage.getItem("totalReadTime"); 
        setReadTime(getTotalReadTime);
    }, [totalReadTime]);

    return (
        <div className="my-6 mx-auto px-6">
            <h1 className="text-2xl font-semibold text-[#6047EC] bg-[#6047ec1a] text-center border rounded-lg border-[#6047EC] py-3 px-4">Spent time on read : {readTime} min</h1>
            <div className="mt-6 p-4 rounded-lg bg-[#1111110D]">
                <h1 className="text-xl font-bold">Bookmarked Blogs : 8</h1>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Sidebar;