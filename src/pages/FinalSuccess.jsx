import React from "react";
import { useNavigate } from "react-router-dom";

const FinalSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="text-3xl font-bold text-blue-600 tracking-tight">
          coinbase
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center space-y-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-check text-4xl text-green-600"></i>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            Account setup complete!
          </h1>

          <p className="text-gray-600 font-medium">
            You're all set to start your crypto journey with Coinbase.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm text-xl"
          >
            Done
          </button>
        </div>

        <button
          onClick={() => navigate("/")}
          className="text-gray-500 font-bold text-sm uppercase tracking-wider hover:text-gray-800 transition-colors"
        >
          sign out
        </button>
      </div>
    </div>
  );
};

export default FinalSuccess;
