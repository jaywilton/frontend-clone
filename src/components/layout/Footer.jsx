import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-1 space-y-6">
          <img src="/image/Capture.PNG" alt="Logo" className="h-6" />
          <div className="text-gray-500 text-sm">
            <select className="border rounded p-2 mb-4 w-full max-w-[150px]">
              <option>English</option>
            </select>
            <p>© 2022 Coinbase</p>
            <p className="mt-4">Blog • Twitter • Facebook</p>
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-4">Company</h5>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Affiliates</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Investors</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Learn</h5>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>Ethereum Merge</li>
            <li>Browse crypto prices</li>
            <li>Coinbase Bytes</li>
            <li>Crypto basics</li>
            <li>Tips & tutorials</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Individuals</h5>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>Buy & sell</li>
            <li>Earn free crypto</li>
            <li>Wallet</li>
            <li>NFT</li>
            <li>Card</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Support</h5>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>Help center</li>
            <li>Contact us</li>
            <li>Create account</li>
            <li>ID verification</li>
            <li>Account information</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
