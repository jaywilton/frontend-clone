import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [topMovers, setTopMovers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopMovers = async () => {
      try {
        // Fetch top 5 coins in NGN
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=5&page=1&sparkline=false",
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setTopMovers(data);
      } catch (error) {
        console.error("Error fetching top movers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopMovers();
  }, []);

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-100 flex flex-col p-6 space-y-8 hidden lg:flex">
        <Link to="/" className="mb-4">
          <img
            src="/image/coinbase-icon2.svg"
            alt="Coinbase"
            className="w-12 h-12"
          />
        </Link>

        <nav className="flex flex-col space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center space-x-4 p-3 bg-blue-50 text-blue-600 rounded-lg font-bold"
          >
            <i className="fa fa-home text-xl"></i>
            <span>Home</span>
          </Link>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Assets feature coming soon");
            }}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg font-bold transition-colors"
          >
            <img src="/image/asses.PNG" alt="" className="w-6 h-6" />
            <span>Assets</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Trade feature coming soon");
            }}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg font-bold transition-colors"
          >
            <img src="/image/tra.PNG" alt="" className="w-6 h-6" />
            <span>Trade</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Earn feature coming soon");
            }}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg font-bold transition-colors"
          >
            <img src="/image/e.PNG" alt="" className="w-6 h-6" />
            <span>Earn</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Pay feature coming soon");
            }}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg font-bold transition-colors"
          >
            <img src="/image/f.PNG" alt="" className="w-6 h-6" />
            <span>Pay</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("NFTs feature coming soon");
            }}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg font-bold transition-colors"
          >
            <img src="/image/g.PNG" alt="" className="w-6 h-6" />
            <span>NFTs</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("More features coming soon");
            }}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg font-bold transition-colors"
          >
            <img src="/image/h.PNG" alt="" className="w-6 h-6" />
            <span>More</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white z-10">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-3">
              <button
                onClick={() => alert("Buy & Sell modal coming soon")}
                className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition-colors"
              >
                Buy & Sell
              </button>
              <button
                onClick={() => alert("Send & Receive modal coming soon")}
                className="border border-gray-200 px-4 py-2 rounded font-bold hover:bg-gray-50 transition-colors"
              >
                Send & Receive
              </button>
              <button
                onClick={() => alert("Rewards feature coming soon")}
                className="bg-blue-50 text-blue-600 px-4 py-2 rounded font-bold hover:bg-blue-100 transition-colors"
              >
                Get NGN 4,355
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <div
                onClick={() => alert("Notifications")}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-full cursor-pointer"
              >
                <i className="fa-regular fa-bell text-xl"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-full cursor-pointer">
                <i className="fa-solid fa-border-none text-lg"></i>
              </div>
              <div className="h-8 w-px bg-gray-200 mx-2"></div>
              <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <i className="fa-solid fa-circle-user text-4xl"></i>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button className="lg:hidden">
              <i className="fa fa-bars text-xl"></i>
            </button>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-grow overflow-y-auto p-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left/Middle Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Welcome Section */}
              <div className="flex flex-col md:flex-row items-center justify-between p-8 border border-gray-100 rounded-2xl bg-white shadow-sm">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Welcome Olayinka Jimoh
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src="/image/mark.PNG" alt="" className="w-5 h-5" />
                    <span className="font-bold">You're almost there</span>
                  </div>
                  <h2 className="text-3xl font-bold">Fund your account</h2>
                </div>
                <div className="mt-6 md:mt-0">
                  <img src="/image/world.PNG" alt="" className="w-48" />
                </div>
              </div>

              {/* Progress Steps */}
              <div className="p-8 border border-gray-100 rounded-2xl space-y-8">
                <h3 className="text-2xl font-bold">Remaining steps</h3>
                <p className="text-gray-600 text-lg">
                  You're close to finishing your account setup. Next up, add a
                  payment method.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 opacity-50">
                    <img src="/image/done.PNG" alt="Done" className="w-6" />
                    <span className="text-lg font-medium">Account created</span>
                  </div>
                  <div className="flex items-start space-x-4 opacity-50">
                    <img src="/image/done.PNG" alt="Done" className="w-6" />
                    <span className="text-lg font-medium">
                      Verify your info
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      src="/image/Card.PNG"
                      alt="Card"
                      className="w-8 shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="text-lg font-bold">
                        Add a payment method
                      </div>
                      <div className="text-gray-500 font-medium">
                        Get ready to trade
                      </div>
                      <button className="text-blue-600 font-bold mt-1 hover:underline">
                        Why is this important?{" "}
                        <i className="fa fa-caret-down ml-1"></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      src="/image/arrr.PNG"
                      alt="Buy"
                      className="w-8 shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="text-lg font-bold">
                        Buy your first crypto
                      </div>
                      <div className="text-gray-500 font-medium">
                        Jump start your crypto portfolio
                      </div>
                      <button className="text-blue-600 font-bold mt-1 hover:underline">
                        Learn more <i className="fa fa-caret-down ml-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="p-8 border border-gray-100 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold">More Info</h3>
                <div className="divide-y divide-gray-50 border-t border-gray-50">
                  <button
                    onClick={() => alert("FAQ coming soon")}
                    className="w-full flex justify-between items-center py-4 font-bold hover:text-blue-600 transition-colors"
                  >
                    <span>FAQ</span>
                    <i className="fa fa-chevron-right text-xs text-gray-300"></i>
                  </button>
                  <button
                    onClick={() =>
                      alert("Account agreement & statements coming soon")
                    }
                    className="w-full flex justify-between items-center py-4 font-bold hover:text-blue-600 transition-colors"
                  >
                    <span>Account and agreement & statements</span>
                    <i className="fa fa-chevron-right text-xs text-gray-300"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column (Top Movers) */}
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Top Movers</h3>
                <button className="text-blue-600 font-bold hover:underline">
                  See all
                </button>
              </div>

              <div className="space-y-4">
                {loading ? (
                  <div className="text-center text-gray-500 py-4 font-medium">
                    Loading top movers...
                  </div>
                ) : topMovers.length > 0 ? (
                  topMovers.map((item) => {
                    const up = item.price_change_percentage_24h >= 0;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <div className="font-bold group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-400 font-bold uppercase">
                              {item.symbol}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">
                            NGN{" "}
                            {item.current_price.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </div>
                          <div
                            className={`font-bold text-sm ${up ? "text-green-500" : "text-red-500"}`}
                          >
                            {up ? "+" : ""}
                            {item.price_change_percentage_24h?.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center text-gray-500 py-4">
                    Unable to fetch top movers. Please try again later.
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
