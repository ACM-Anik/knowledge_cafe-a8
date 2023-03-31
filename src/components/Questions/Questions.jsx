import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className="my-5">
            <div>
                <h1 className="text-center text-4xl font-bold ">Frequently Common <span className="text-[#6047EC]">Questions</span></h1>
            </div>
            <div className="my-5 py-2 px-4 md:p-8 rounded-lg bg-[#1111110D]">
                <div className="bg-white rounded-lg p-4 my-2">
                    <h1 className="text-2xl font-bold my-3">1. Props vs state:-</h1>
                    <div className="md:flex md:justify-between md:gap-5">
                        <p className="text-lg font-semibold font-mono">Props: <br />
                            Props are read-only and immutable, allow you to pass data from one component to other components as an argument. Props can be accessed by the child component and are used to communicate between components, make components reusable.
                        </p>
                        <p className="text-lg font-semibold font-mono">State: <br />
                            State changes can be asynchronous. It is mutable. It holds information about the components. It cannot be accessed by child components. It can be used for rendering dynamic changes with the component and cannot make components reusable.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4 my-4">
                    <h1 className="text-2xl font-bold my-3">2. How does useState work?</h1>
                    <p className="text-lg font-semibold font-mono">
                        useState is a function in React that allows us to add state to functional components. We declare a state variable with the useState hook, which takes an initial state value as an argument and returns an array with the current state value and a function to update the state. We can use the state variable and update it with the provided function, and React will re-render the component with the new state value.
                        <br />
                        Overall, the useState hook is a powerful tool that simplifies state management in functional components and allows us to create dynamic and interactive UIs in React.
                    </p>
                </div>
                <div className="bg-white rounded-lg p-4 my-4">
                    <h1 className="text-2xl font-bold my-3">3. What are the purposes of useEffect other than fetching data?</h1>
                    <p className="text-lg font-semibold font-mono">
                        Purposes of useEffect other than fetching data:
                        <br />
                        Managing side effects such as setting up and tearing down timers, subscriptions, and event listeners. It Integrates with third-party libraries, animates component transitions, update the document title based on state or props, handles user authentication and authorization, handles browser or network events, updates the URL or navigating to a different page, updates global state outside of React.
                    </p>
                </div>
                <div className="bg-white rounded-lg p-4 my-2">
                    <h1 className="text-2xl font-bold my-3">4. How Does React work?</h1>
                    <p className="text-lg font-semibold font-mono">
                        React is a JavaScript library that is used for building user interfaces. React uses a component-based architecture, which means that UI elements are broken down into reusable components. When a user interacts with a React-based application, the browser sends an event to the application. React then updates the UI by modifying the state of the components. This process is called rendering. React uses a virtual DOM to efficiently update the UI. The virtual DOM is a lightweight copy of the actual DOM that React keeps in memory. When the state of a component changes, React updates the virtual DOM and then calculates the minimal set of changes required to update the actual DOM. This approach is much faster than updating the entire DOM. React also supports server-side rendering, which allows the initial rendering of the application to be done on the server rather than in the browser.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;