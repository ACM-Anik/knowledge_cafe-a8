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
                    <h1 className="text-2xl font-bold my-3">1. Props vs state:-</h1>
                    <p className="text-lg font-semibold font-mono">Props: <br />
                        Props are read-only and immutable, allow you to pass data from one component to other components as an argument. Props can be accessed by the child component and are used to communicate between components, make components reusable.
                    </p>
                    <p className="text-lg font-semibold font-mono">State: <br />
                        State changes can be asynchronous. It is mutable. It holds information about the components. It cannot be accessed by child components. It can be used for rendering dynamic changes with the component and cannot make components reusable.
                    </p>
                </div>
                <div className="bg-white rounded-lg p-4 my-4">
                    <h1 className="text-2xl font-bold my-3">2. How does useState work?</h1>
                    <p className="text-lg font-semibold font-mono">
                        The useState hook is a powerful tool that simplifies state management in functional components and allows us to create dynamic and interactive UIs in React. <br />

                        The useState hook uses a concept known as closures to manage state between function calls. When we call the useState hook, React creates a state object with the initial state value that we pass as an argument. This state object is stored internally and is associated with the useState hook used component. React then returns an array with two elements: the current state value and a function that can be used to update the state value. The state value is initially set to the initial state value that we passed to the useState hook. When we call the state update function, React schedules a re-render of the component with the updated state value. When the component re-renders, React uses the updated state value to render the component with the updated UI. React also manages the state updates and ensures that they are applied in the correct order. If multiple state updates are triggered in a single function call, React will batch the updates and apply them in the correct order during the next render cycle. Overall, the useState hook is a powerful tool that simplifies state management in functional components and allows us to create dynamic and interactive UIs in React.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;