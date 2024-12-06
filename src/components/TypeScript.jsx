import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const TypeScript = () => {

    const [text] = useTypewriter({
        words: ['Highest Rated Game', 'Highest Rated Game', 'Highest Rated Game', 'Highest Rated Game'],
        loop: 0
    })


    return (
        <div className='h-14 text-center text-green-800 py-10'>
            <span className='text-4xl font-bold'>{text}</span>
        </div>
    );
};

export default TypeScript;