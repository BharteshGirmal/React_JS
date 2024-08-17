import React, { useState, useEffect } from 'react';

export default function App() {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures fetchData is called once on component mount.

  return (
    <div>
      {state.map((e) => {
        return <div className="container bg-dark" key={e.id}>
          <span>{e.name}</span>
        </div>;
      })}
    </div>
  );
}
