import { Fade } from 'react-awesome-reveal';
import gameImg from '../assets/gaming 1.webp'

const Subcribe = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <Fade cascade damping={0.3}>
                        <img
                            src={gameImg}
                            className="max-w-xl rounded-lg shadow-2xl" />
                    </Fade>
                    <div className='flex flex-col justify-center items-center'>
                        <Fade cascade damping={0.3}>
                            <p><h1 className="text-5xl text-center font-bold">Subscribe to the Our Games Email List</h1></p>
                            <p className="py-6 text-center">
                                Sign up for our email to get info on game announcements and updates, details on special events and offers, and more from Games and our affiliates.
                            </p>
                            <button className="btn btn-primary">Subscribe Now</button>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subcribe;