import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            const response = await fetch('https://justins-fullstack-showcase-731991412305.us-central1.run.app/api/visitor-count');
            const data = await response.json();
            setCount(data.count);
        };

        fetchVisitorCount();
    }, []);

    return (
        <div>
            <h1>Visitor Count: {count}</h1>
        </div>
    );
};

export default VisitorCounter;