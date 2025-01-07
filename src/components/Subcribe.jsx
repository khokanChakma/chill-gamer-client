import { Fade } from 'react-awesome-reveal';
import gameImg from '../assets/gaming 1.webp'
import Swal from 'sweetalert2';

const Subcribe = () => {
    const handleSubcribe = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Subscribe successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div>
            <div className="hero bg-base-200 p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div>
                        <Fade cascade damping={0.3}>
                            <img
                                src={gameImg}
                                className="w-full rounded-lg shadow-2xl" />
                        </Fade>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Fade cascade damping={0.3}>
                            <p><h1 className="text-5xl text-center font-bold">Subscribe to the Our Games Email List</h1></p>
                            <p className="py-6 text-center">
                                Sign up for your email to get info on game announcements and updates, details on special events and offers, and more from Games and our affiliates.
                            </p>
                            <div className='flex join'>
                                <label className="input join-item input-bordered flex items-center gap-2">
                                    
                                    <input type="email" className="grow" placeholder="Email" />
                                </label>
                                <button onClick={handleSubcribe} className="btn border-none bg-[#018992] btn-primary join-item">Subscribe Now</button>
                            </div>

                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subcribe;