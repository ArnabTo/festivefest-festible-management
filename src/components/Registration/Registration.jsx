import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {

  const {createUser, profileUpdate} = useContext(AuthContext)

  const handleRegistration = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    console.log(displayName)
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //  console.log(email, password, typeof(email), typeof(password))

    if (password.length < 6) {
      toast.error("Password length must have to more than 6");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have atleast one Capital chracter");
      return;
    } else if (!/.*[!@#$%^&*()_+{}[\]:;<>,.?~`|\\/"'=-].*/.test(password)) {
      toast.error("Password must have atleast one Special chracter");
      return;
    }

    createUser(email, password)
      .then(res => {
        toast.success("Congratulation! Your succesfully registered");
        console.log(res.user);
        profileUpdate(displayName, photoURL)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegistration}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name"placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" name="photoURL"  placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <label className="label">
                  <Link to="/log" className="label-text-alt link link-hover">Already a user? Login Here!</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
    </div>
  );
};

export default Registration;