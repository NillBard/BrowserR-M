import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/actions/actionCreatore";

const SignUp = () => {
  const user = useSelector((store) => store?.user?.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    dispatch(signupUser(formData));
  };

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [user]);

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="border border-slate-700 rounded p-8 flex flex-col items-center">
        <h1 className="font-bold text-4xl">R&M Browser</h1>
        <h3 className="font-semibold text-xl my-4">Sign Up</h3>
        <SignUpReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export const SignUpForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className="border border-slate-500 p-1 rounded-md mb-2 w-full"
          type="email"
          placeholder="Email"
          component="input"
          name="email"
        />
      </div>
      <div>
        <Field
          className="border border-slate-500 p-1 rounded-md mb-2 w-full"
          type="text"
          placeholder="Name"
          component="input"
          name="name"
        />
      </div>
      <div>
        <Field
          className="border border-slate-500 p-1 rounded-md mb-2 w-full"
          type="password"
          component="input"
          placeholder="Enter password"
          name="password"
        />
      </div>
      <div className="my-2 text-xs text-slate-700 text-center">
        Already have an account?
        <NavLink to="/login" className="text-indigo-500">
          Login
        </NavLink>
      </div>
      <button
        className="w-full p-2 border-none rounded-md bg-slate-900 text-white"
        type="submit"
      >
        SignUp
      </button>
    </form>
  );
};

const SignUpReduxForm = reduxForm({ form: "signup" })(SignUpForm);

export default SignUp;
