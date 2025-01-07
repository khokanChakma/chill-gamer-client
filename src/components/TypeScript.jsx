import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const TypeScript = () => {

    const [text] = useTypewriter({
        words: ['Highest Rated Game', 'Highest Rated Game', 'Highest Rated Game', 'Highest Rated Game'],
        loop: 0
    })


    return (
        <div className='h-10 text-center text-[#018992] my-8'>
            <span className='text-4xl font-bold'>{text}</span>
        </div>
    );
};

export default TypeScript;