import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState(0);
    // fetch('https://api.github.com/users/hiteshchoudhary')
    // .then(response => response.json())
    // .then(data => setData(data))
    const data = useLoaderData() 
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>GitHub Followers: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}