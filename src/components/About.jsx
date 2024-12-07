import bgImg from '../assets/bg.jpg'

const About = () => {
    return (
        <div className="px-4 bg-cove mb-8 bg-center"  style={{backgroundImage: `url(${bgImg})`}}>
            <h2 className="py-8 text-white text-3xl font-bold text-center">About Us</h2>
            <p className="md:w-8/12 mx-auto pb-8 text-white">Welcome to our website your ultimate destination for all things gaming! Whether you’re a casual player or a hardcore enthusiast, we’re here to fuel your passion for gaming.
            <br />
            Our mission is to create a vibrant community where gamers can discover the latest news, reviews, tips, and guides for their favorite games. From trending titles to hidden gems, we cover a wide spectrum to ensure there’s something for everyone.
            <br />
            Join us as we celebrate the thrill of gaming, explore new adventures, and connect with like-minded players from around the globe. Together, let’s level up our gaming experience!</p>
        </div>
    );
};

export default About;