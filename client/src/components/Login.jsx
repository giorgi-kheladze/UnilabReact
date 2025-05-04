import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
const Login = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, navigate } = useAppContext();

  const isLoginValid = email.trim() !== "" && password.trim() !== "";
  const isRegisterValid =
    name.trim() !== "" &&
    surname.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "";

  const login = (e) => {
    e.preventDefault();
    if (!isLoginValid) return;
    setUser(true);
    navigate("/");
  };

  const success = (e) => {
    e.preventDefault();
    if (!isRegisterValid) return;
    navigate("/success");
  };

  return (
    <form className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white mb-[177px] md:w-[700px]">
      {state === "login" ? (
        <div className="mb-[100px]">
          <p className="text-[32px] font-bold">Wellcome Back</p>
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setState("register")}
              className="cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      ) : (
        <div className="mb-[100px]">
          <p>Create account</p>
          <p>
            Already have an account?
            <span onClick={() => setState("login")} className="cursor-pointer">
              Login
            </span>
          </p>
        </div>
      )}

      {state === "register" && (
        <div className="flex w-full justify-between gap-[20px]">
          <div className="w-full">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="First Name"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-none"
              type="text"
              required
            />
          </div>
          <div className="w-full">
            <input
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              placeholder="Last Name"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-none"
              type="text"
              required
            />
          </div>
        </div>
      )}
      <div className="w-full">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-none"
          type="email"
          required
        />
      </div>
      <div className="w-full relative">
        <img
          className="absolute top-[15px] right-[20px] cursor-pointer"
          src={assets.eye_off}
          alt="eye"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-none"
          type="password"
          required
        />
      </div>

      {state === "register" ? (
        <div className="flex gap-[33px] mb-[30px]">
          <img className="cursor-pointer" src={assets.box} alt="check" />
          <p>I agree to DopeSass Terms of service and Privacy policy</p>
        </div>
      ) : (
        <p className="cursor-pointer w-full text-right">Forgot Password</p>
      )}

      {state === "register" ? (
        <button
          onClick={success}
          className="bg-black transition-all text-white w-full py-2 rounded-md cursor-pointer disabled:opacity-70"
          disabled={!isRegisterValid}
        >
          Create Account
        </button>
      ) : (
        <button
          onClick={login}
          className="bg-black transition-all text-white w-full py-2 rounded-md cursor-pointer disabled:opacity-70"
          disabled={!isLoginValid}
        >
          Login
        </button>
      )}

      <div className="flex justify-between items-center mt-[30px] w-full">
        <div className="w-[259px] h-[1px] bg-gray-400"></div>
        <p>or</p>
        <div className="w-[259px] h-[1px] bg-gray-400"></div>
      </div>

      <div className="flex flex-col w-full justify-center gap-[20px] mt-[30px]">
        <button className="flex gap-[10px] items-center justify-center border py-[15px] cursor-pointer rounded-[5px] font-medium">
          <img src={assets.google} alt="google" />
          <p>Continue with Google</p>
        </button>
        <button className="flex gap-[10px] items-center justify-center border py-[15px] cursor-pointer rounded-[5px] font-medium">
          <img src={assets.apple} alt="apple" />
          <p>Continue with Apple</p>
        </button>
      </div>
    </form>
  );
};

export default Login;
