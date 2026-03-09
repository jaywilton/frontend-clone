import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false",
        );
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section
          className="relative"
          style={{
            background:
              "linear-gradient(135deg, #0052ff 0%, #0a0b0d 60%, #111827 100%)",
            minHeight: "540px",
          }}
        >
          {/* subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative container mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
            {/* Left – copy */}
            <div className="md:w-1/2 space-y-7 text-white">
              {/* badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Trade crypto, stocks, and more
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                The future of
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                  }}
                >
                  finance
                </span>{" "}
                is here.
              </h1>

              <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed">
                Buy, sell, and grow your crypto on the platform trusted by
                millions worldwide. Start in minutes.
              </p>

              {/* email CTA */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
                />
                <Link
                  to="/get-started"
                  className="bg-blue-500 hover:bg-blue-400 text-white px-7 py-4 rounded-xl font-bold whitespace-nowrap text-center transition-colors"
                >
                  Get started
                </Link>
              </div>

              <p className="text-blue-200 text-sm">
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-white font-semibold underline underline-offset-2 hover:text-blue-200"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Right – phone mockup */}
            <div className="md:w-1/2 flex justify-center">
              <div
                className="relative w-72 h-[420px] md:w-80 md:h-[480px] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <img
                  src="/image/phone.PNG"
                  alt="Coinbase App Preview"
                  className="w-full h-full object-cover"
                />
                {/* glow ring */}
                <div className="absolute -inset-1 rounded-[2.8rem] border border-blue-400/30 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* bottom wave divider */}
          <div
            className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none"
            style={{ height: "60px" }}
          >
            <svg
              viewBox="0 0 1440 60"
              preserveAspectRatio="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* ── Live Price Ticker ────────────────────── */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Today's prices
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Live market data from CoinGecko
              </p>
            </div>
            <Link
              to="/explore"
              className="text-blue-600 font-bold text-sm hover:underline"
            >
              View all assets →
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 p-5 h-20 animate-pulse bg-gray-50"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coins.map((coin) => {
                const isUp = coin.price_change_percentage_24h >= 0;
                return (
                  <div
                    key={coin.id}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 px-5 py-4 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer"
                    onClick={() => navigate("/explore")}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-bold text-gray-900 leading-tight">
                          {coin.name}
                        </div>
                        <div className="text-xs text-gray-400 uppercase">
                          {coin.symbol}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">
                        $
                        {coin.current_price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      <div
                        className={`text-sm font-semibold ${isUp ? "text-green-600" : "text-red-500"}`}
                      >
                        {isUp ? "▲" : "▼"}{" "}
                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Why Coinbase / Trust Pillars ────────── */}
        <section className="py-20" style={{ background: "#f8faff" }}>
          <div className="container mx-auto px-6 text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              The most trusted platform
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Here's why over 100 million people choose Coinbase.
            </p>
          </div>

          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔐",
                title: "Secure storage",
                desc: "We store the vast majority of digital assets in offline cold storage, protected by industry-leading security practices.",
              },
              {
                icon: "🛡️",
                title: "Protected by insurance",
                desc: "Coinbase carries crypto crime insurance. All USD cash balances are covered up to $250,000 by FDIC insurance.",
              },
              {
                icon: "🌍",
                title: "Industry best practices",
                desc: "Coinbase is a publicly traded company (NASDAQ: COIN) and complies with all applicable laws and regulations.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stats Banner ─────────────────────────── */}
        <section
          style={{ background: "linear-gradient(90deg, #0052ff, #0a0b0d)" }}
          className="py-16"
        >
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "$6T+", label: "Lifetime volume traded" },
              { value: "100M+", label: "Verified users" },
              { value: "100+", label: "Countries supported" },
              { value: "$250B+", label: "Assets on platform" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-extrabold">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Earn Crypto Section ──────────────────── */}
        <section className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <span className="inline-block bg-green-100 text-green-700 font-bold text-sm px-4 py-1.5 rounded-full">
                💰 Crypto Rewards
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Earn free crypto.
                <br />
                <span className="text-blue-600">While you learn.</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-md leading-relaxed">
                Discover how specific cryptocurrencies work — and earn a bit of
                each crypto to try out for yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/learn")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-bold transition-colors"
                >
                  Start earning
                </button>
                <button
                  onClick={() => navigate("/learn")}
                  className="border-2 border-gray-200 hover:border-blue-300 text-gray-800 px-7 py-3.5 rounded-full font-bold transition-colors"
                >
                  Learn more
                </button>
              </div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                {
                  name: "The Graph",
                  symbol: "GRT",
                  reward: "$4",
                  icon: "/image/graph1.png",
                },
                {
                  name: "Sandbox",
                  symbol: "SAND",
                  reward: "$3",
                  icon: "/image/amp.png",
                },
                {
                  name: "Pro Galaxy",
                  symbol: "GAL",
                  reward: "$4",
                  icon: "/image/gal.png",
                },
                {
                  name: "Near Protocol",
                  symbol: "NEAR",
                  reward: "$4",
                  icon: "/image/near1.png",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all"
                  onClick={() => navigate("/learn")}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-sm truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-400">{item.symbol}</div>
                  </div>
                  <div className="ml-auto text-green-600 font-bold text-sm whitespace-nowrap">
                    +{item.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Get Started Steps ────────────────────── */}
        <section style={{ background: "#f8faff" }} className="py-20">
          <div className="container mx-auto px-6 text-center space-y-6 mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Get started in minutes
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Coinbase makes it easy to start your crypto journey — here's how.
            </p>
          </div>

          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                step: "01",
                title: "Create your account",
                desc: "Sign up in seconds. All you need is your email address to get started.",
                color: "#0052ff",
              },
              {
                step: "02",
                title: "Add your payment method",
                desc: "Connect a bank account, debit card, or wire transfer to fund your account.",
                color: "#7c3aed",
              },
              {
                step: "03",
                title: "Start buying & selling",
                desc: "Buy Bitcoin, Ethereum, and hundreds of other crypto assets with ease.",
                color: "#059669",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-sm mb-5"
                  style={{ background: s.color }}
                >
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/get-started"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Create a free account
            </Link>
          </div>
        </section>

        {/* ── App Download Banner ──────────────────── */}
        <section
          className="relative overflow-hidden py-20"
          style={{ background: "linear-gradient(135deg, #0a0b0d, #1e3a8a)" }}
        >
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6 text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Trade anytime,
                <br />
                anywhere.
              </h2>
              <p className="text-blue-200 text-lg max-w-md">
                Download the Coinbase app and start trading crypto on the go.
                Available on iOS and Android.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
                  <span className="text-xl">🍎</span> App Store
                </button>
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
                  <span className="text-xl">🤖</span> Google Play
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/image/phone.PNG"
                alt="Coinbase Mobile App"
                className="w-60 md:w-72 drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
