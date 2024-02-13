import { useContext } from "react";
import bgImage from "../../assets/music class image/131059.jpg";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
export default function SignUp() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        title: "Success!",
        text: "You have signed up successfully.",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          container: "my-swal-container",
          popup: "my-swal-popup",
          confirmButton: "my-swal-confirm-button",
        },
        showCloseButton: false,
        buttonsStyling: false,
        customClass: {
          confirmButton: "my-swal-confirm-button",
        },
        width: "25rem",
      }).then(() => {
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div className="relative ">
      <img className="w-full h-[880px] object-cover " src={bgImage} />
      <div className="w-full px-3 mx-auto pt-44 md:flex-0 shrink-0 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40">
        <div className="relative z-0 flex flex-col min-w-0 break-words bg-white bg-opacity-30  border-0 shadow-soft-xl rounded-2xl bg-clip-border lg:w-[40%] mx-auto">
          <div className="p-6 mb-0 text-center bg-white bg-opacity-0 border-b-0 rounded-t-2xl">
            <h5 className="text-4xl text-white font-semibold">Register with</h5>
          </div>
          <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
            <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
              <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border border-white border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                <FaFacebook className="text-3xl" />
              </a>
            </div>
            <div className="w-3/12 max-w-full px-1 flex-0">
              <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border border-white border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                <FaApple className="text-3xl" />
              </a>
            </div>
            <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
              <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                <FaGoogle className="text-3xl" />
              </a>
            </div>
            <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
              <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white bg-opacity-0 text-lg text-white ">
                or
              </p>
            </div>
          </div>
          <div className="flex-auto p-6">
            <form role="form text-left" onSubmit={handleSignUp}>
              <div className="mb-4">
                <input
                  name="name"
                  placeholder="Name"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white  bg-clip-padding py-2 px-3 font-normal placeholder:text-white  transition-all focus:border-gray-500 focus:bg-white bg-opacity-10 focus:placeholder:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <input
                  name="email"
                  placeholder="Email"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-opacity-10 bg-clip-padding py-2 px-3 font-normal placeholder:text-white transition-all focus:border-gray-500 focus:bg-white  focus:placeholder:text-gray-700 focus:outline-none focus:transition-shadow"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <input
                  name="password"
                  placeholder="Password"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-opacity-10 bg-clip-padding py-2 px-3 font-normal placeholder:text-white transition-all focus:border-gray-500 focus:bg-white  focus:placeholder:text-gray-700 focus:outline-none focus:transition-shadow "
                  type="password"
                />
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                  value="Sign up"
                />
              </div>
              <Link
                to="/login"
                className="pt-8 mb-0 leading-normal text-sm text-white"
              >
                Already have an account? <a className="font-bold">Sign Up</a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
