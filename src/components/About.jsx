import Lottie from 'lottie-react';
import bgImg from '../assets/bg.jpg'
import about from '../assets/about.json'
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <div>
            <SectionTitle heading={'About Us'}></SectionTitle>
            <div className='md:flex gap-4 px-6 bg-base-200 mb-8'>
                <div className=" flex flex-1 justify-center items-center px-12 ">
                        <p className="">Welcome to our website your ultimate destination for all things gaming! Whether you’re a casual player or a hardcore enthusiast, we’re here to fuel your passion for gaming.
                        <br />
                        Our mission is to create a vibrant community where gamers can discover the latest news, reviews, tips, and guides for their favorite games. From trending titles to hidden gems, we cover a wide spectrum to ensure there’s something for everyone.
                        <br />
                        Join us as we celebrate the thrill of gaming, explore new adventures, and connect with like-minded players from around the globe. Together, let’s level up our gaming experience!</p>
                </div>
                <div className='flex justify-center items-center max-w-sm'>
                    <Lottie animationData={about}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default About;