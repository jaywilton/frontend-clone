import React from "react";
import { useNavigate } from "react-router-dom";

const TwoStepVerify = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="text-3xl font-bold text-blue-600 tracking-tight">
          coinbase
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center space-y-8">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            Set up two-step verification
          </h1>

          <div className="w-full space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-[13px] font-bold text-gray-500 uppercase ml-1">
                Country*
              </label>
              <div className="flex bg-gray-50 border border-gray-200 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
                <div className="px-4 py-3 bg-white border-r border-gray-200 text-blue-600 font-bold">
                  NG
                </div>
                <input
                  type="text"
                  defaultValue="Nigeria"
                  className="flex-grow px-4 py-3 bg-transparent focus:outline-none font-medium"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[13px] font-bold text-gray-500 uppercase ml-1">
                Phone Number*
              </label>
              <div className="flex bg-gray-50 border border-gray-200 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
                <div className="px-4 py-3 bg-white border-r border-gray-200 text-green-600 font-bold">
                  +234
                </div>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="flex-grow px-4 py-3 bg-transparent focus:outline-none font-medium"
                />
              </div>
            </div>

            <p className="text-left text-sm text-gray-600 font-medium leading-relaxed px-1">
              Security is critical at coinbase. To help keep your account safe,
              we'll text you a verification code when you sign in on a new
              device.
            </p>

            <button
              onClick={() => navigate("/success")}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Send Code
            </button>
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

export default TwoStepVerify;
