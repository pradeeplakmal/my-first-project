"use client";

import { useState } from "react";
import { loginUser } from "../../lib/apis/server";

//Cilent Component for CSR
export default function LoginForm({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required!...");
      return false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required!...");
      return false;
    } else {
      setPasswordError("");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //login form validate
    const isValid = validateForm();

    if (isValid) {
      //login form submission
      //console.log("Form Data", { email: email, password: password });
      const login = await loginUser({ email: email, password: password });
      console.log("Login Response", login);
    }
  };

  return (
    <div className="w-[380px] mx-auto bg-gray-200">
      <div className="p-8 bg-white border border-gray-400 rounded-md shadow-md">
        <form action="#" onSubmit={handleSubmit} className="space-y-6">
          <h3 className="mb-4 text-xl font-semibold text-center text-gray-800">
            {title}
          </h3>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50"
              placeholder="yourmail@email.com"
            />

            {emailError && (
              <div className="mt-2 ml-1 text-xs text-red-500">{emailError}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50"
              placeholder="••••••••••"
            />

            {passwordError && (
              <div className="mt-2 ml-1 text-xs text-red-500">
                {passwordError}
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border border-gray-300 rounded-md bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-700">
                  Remember me
                </label>
              </div>
            </div>

            <a
              href="/lost-password"
              className="text-sm font-medium text-blue-800 hover:underline"
            >
              Lost password ?
            </a>
          </div>

          <button
            type="submit"
            name="signin"
            className="block w-full p-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300"
          >
            Sign in
          </button>

          <div className="flex justify-center space-x-1 text-sm font-medium text-gray-600">
            <span>Not registered ?</span>
            <a href="/register" className="text-blue-800 hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
