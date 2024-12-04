import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const Register = () => {

    const {createNewUser,setUser} = useContext(AuthContext);

    const handleRegisterSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name,photo,email,password})
        createNewUser(email,password)
        .then(result =>{
            const user = result.user;
            setUser(user)
            console.log(user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="bg-base-300 flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-center mt-4 font-semibold text-2xl">Register Your Account</h2>
                <form onSubmit={handleRegisterSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type='password' name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                    <div className="text-center">
                        <button className="btn">Google Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Already Have An Account ? <Link className="text-red-500" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;