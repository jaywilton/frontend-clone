import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src="/image/Coinbased.PNG" alt="Coinbase" className="h-6" />
        </Link>
        <Link
          to="/get-started"
          className="text-sm font-semibold text-blue-600 cursor-pointer hover:underline"
        >
          Sign Up
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl">
        {/* Signin Form */}
        <div className="w-full lg:w-1/2 max-w-md space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Sign in to Coinbase</h1>
          </div>

          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();

              try {
                const res = await fetch(
                  "https://interim-assesment-kevin-dompreh-1.onrender.com/api/auth/login",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                      email,
                      password,
                    }),
                  },
                );

                const data = await res.json();
                console.log(data);

                if (res.ok) {
                  navigate("/dashboard");
                } else {
                  alert(data.message || "Login failed");
                }
              } catch (err) {
                console.error(err);
                alert("Server error");
              }
            }}
          >
            <div className="space-y-2">
              <label className="text-sm font-bold">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="keep-signed-in"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="keep-signed-in" className="text-sm text-gray-600">
                Keep me signed in on this computer
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Sign in
            </button>
          </form>

          <div className="text-center pt-4">
            <Link
              to="/get-started"
              className="text-sm font-bold text-blue-600 hover:underline"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
