import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src="/image/Coinbased.PNG" alt="Coinbase" className="h-6" />
        </Link>
        <Link
          to="/sign-in"
          className="text-sm font-semibold text-blue-600 cursor-pointer hover:underline"
        >
          Sign In
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-start justify-center gap-16 max-w-6xl">
        {/* Signup Form */}
        <div className="w-full lg:w-1/2 max-w-md space-y-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <i className="fa-solid fa-arrow-left text-lg"></i>
            </Link>
            <h1 className="text-3xl font-bold">Create an account</h1>
          </div>

          <div className="text-sm text-gray-500">
            Required fields have an asterisk: *
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/verify");
            }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-bold">First Name*</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-sm font-bold">Last Name*</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold">Password*</label>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                required
              />
              <label className="text-sm text-gray-600 leading-tight">
                I certify that I am 18 years of age or older, I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  User Agreement
                </a>
                , and I have read the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Create free account
            </button>
          </form>

          <div className="text-center pt-4">
            <button className="text-sm font-bold">
              <span className="text-blue-600 hover:underline">Sign up</span> for
              a business account
            </button>
          </div>
        </div>

        {/* Info Column */}
        <div className="hidden lg:block w-1/2 space-y-6 pt-12">
          <h2 className="text-3xl font-bold leading-tight">
            Do more with crypto, only on Coinbase
          </h2>
          <p className="text-gray-600 text-lg">
            Set up your account and verify your photo ID to get started on
            trading crypto.
          </p>
          <img
            src="/image/bitcoinAndOtherCrypto-1.svg"
            alt="Crypto World"
            className="w-[500px]"
          />
        </div>
      </main>
    </div>
  );
};

export default Signup;
