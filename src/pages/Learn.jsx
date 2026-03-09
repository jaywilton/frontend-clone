import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Learn = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        // Fetching trending coins from CoinGecko
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending",
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        // Extract only the top 4 trending items
        setTrending(data.coins.slice(0, 4).map((c) => c.item));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center md:text-left mb-16 space-y-4">
          <h1 className="text-5xl font-bold">Crypto basics</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Everything you need to know about crypto, straight from the experts
            so you can start investing with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Learn Card 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-blue-50 rounded-xl mb-4 overflow-hidden relative">
              <img
                src="/image/phone.PNG"
                alt="Crypto Basics"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              What is cryptocurrency?
            </h3>
            <p className="text-gray-600">
              A beginner's guide to digital money, how it works, and why it
              matters.
            </p>
          </div>

          {/* Learn Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-orange-50 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
              {/* Inline SVG Bitcoin logo — always sharp at any size */}
              <svg
                viewBox="0 0 64 64"
                className="w-28 h-28 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#F7931A" />
                <path
                  fill="#fff"
                  d="M46.1 28.4c.6-4.1-2.5-6.3-6.8-7.8l1.4-5.5-3.4-.9-1.4 5.4c-.9-.2-1.8-.4-2.7-.6l1.4-5.5-3.4-.9-1.4 5.5c-.7-.2-1.5-.3-2.2-.5l-4.7-1.2-.9 3.6s2.5.6 2.4.6c1.4.3 1.6 1.2 1.6 1.9l-1.6 6.5c.1 0 .2.1.3.1-.1 0-.2-.1-.3-.1l-2.3 9.1c-.2.5-.7 1.2-1.7 1l-2.4-.6-1.7 3.9 4.4 1.1c.8.2 1.6.4 2.4.6l-1.4 5.6 3.4.9 1.4-5.5c.9.2 1.8.5 2.7.7l-1.4 5.5 3.4.9 1.4-5.6c5.8 1.1 10.1.6 12-4.6 1.5-4.1-.1-6.5-3.1-8 2.2-.5 3.8-2 4.2-5Zm-7.5 10.5c-1.1 4.1-8.3 1.9-10.6 1.3l1.9-7.5c2.3.6 9.8 1.8 8.7 6.2Zm1-10.6c-1 3.8-7 1.8-9 1.4l1.7-6.8c2 .5 8.4 1.5 7.3 5.4Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              What is Bitcoin?
            </h3>
            <p className="text-gray-600">
              Learn about the first and largest cryptocurrency by market
              capitalization.
            </p>
          </div>
        </div>

        {/* Trending Section */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Trending assets</h2>
              <p className="text-gray-600">See what others are watching</p>
            </div>
            <Link
              to="/explore"
              className="text-blue-600 font-semibold hover:underline hidden sm:block"
            >
              View all assets
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {loading ? (
              <div className="col-span-full py-8 text-center text-gray-500">
                Loading trending data...
              </div>
            ) : trending.length > 0 ? (
              trending.map((coin) => (
                <div
                  key={coin.id}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between h-full"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={coin.thumb}
                      alt={coin.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-sm line-clamp-1">
                        {coin.name}
                      </div>
                      <div className="text-xs text-gray-500">{coin.symbol}</div>
                    </div>
                  </div>
                  <div className="font-medium">
                    Market Rank #{coin.market_cap_rank}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-8 text-center text-gray-500">
                Unable to load trending data.
              </div>
            )}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              to="/explore"
              className="text-blue-600 font-semibold hover:underline"
            >
              View all assets
            </Link>
          </div>
        </section>

        <section className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="md:w-2/3 mb-6 md:mb-0 space-y-4">
            <h2 className="text-3xl font-bold">Earn crypto while you learn</h2>
            <p className="text-blue-100 text-lg">
              Watch short videos, take quick quizzes, and earn free crypto for
              completing lessons.
            </p>
          </div>
          <div>
            <Link
              to="/get-started"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block"
            >
              Start earning
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;
