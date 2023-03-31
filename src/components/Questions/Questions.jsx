import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className="my-5">
            <div>
                <h1 className="text-center text-4xl font-bold ">Frequently Common <span className="text-[#6047EC]">Questions</span></h1>
            </div>
            <div className="my-6 p-4 md:p-8 rounded-lg bg-[#1111110D]">
                <div className="bg-white rounded-lg p-4 my-4">
                    <h1 className="text-2xl font-bold ">1. Props vs state:-</h1>
                    <p className="text-lg font-semibold">Props: <br />
                        Props are read-only and immutable, allow you to pass data from one component to other components as an argument. Props can be accessed by the child component and are used to communicate between components, make components reusable.
                    </p>
                    <p className="text-lg font-semibold">State: <br />
                        State changes can be asynchronous. It is mutable. It holds information about the components. It cannot be accessed by child components. It can be used for rendering dynamic changes with the component and cannot make components reusable.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Questions;