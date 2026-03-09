import React from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="text-3xl font-bold text-blue-600 tracking-tight">
          coinbase
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center space-y-6">
          <h1 className="text-2xl font-bold">Verify your email</h1>

          <div className="w-full flex justify-center py-6">
            <img
              src="/image/envelPNG.PNG"
              alt="Mail"
              className="w-1/2 max-w-[150px]"
            />
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-800 leading-tight">
              We sent a verification email to your mail
            </p>
            <p className="text-gray-500">
              Click the link inside to get started
            </p>
          </div>

          <button
            onClick={() => navigate("/verify-code")}
            className="w-full py-3 text-blue-600 font-bold hover:bg-blue-50 transition-colors border border-blue-100 rounded-lg mt-4"
          >
            Done
          </button>

          <div className="w-full pt-4 border-t border-gray-100 italic text-gray-400 text-sm">
            Email didn't arrive?
          </div>
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

export default VerifyEmail;
