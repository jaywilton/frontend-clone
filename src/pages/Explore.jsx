import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CryptoTable from "../components/crypto/CryptoTable";

const Explore = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        // Fetching top 50 coins for the explore page
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false",
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching exploratory coin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Explore the cryptoeconomy</h1>
          <p className="text-xl text-gray-600">
            View cryptocurrency prices, charts, and market capitalization.
          </p>
        </div>

        {/* Reusing CryptoTable for the Explore page */}
        <div className="overflow-x-auto">
          <CryptoTable coins={coins} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
