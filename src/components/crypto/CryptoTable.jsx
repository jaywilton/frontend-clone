import React from "react";
import { useNavigate } from "react-router-dom";

const CryptoTable = ({ coins, loading }) => {
  const navigate = useNavigate();

  return (
    <table className="w-full text-left">
      <thead>
        <tr className="text-gray-500 uppercase text-xs tracking-wider border-b border-gray-100">
          <th className="pb-4 font-normal">#</th>
          <th className="pb-4 font-normal">Name</th>
          <th className="pb-4 font-normal">Price</th>
          <th className="pb-4 font-normal">Change</th>
          <th className="pb-4 font-normal hidden md:table-cell">Chart</th>
          <th className="pb-4 font-normal">Trade</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {loading ? (
          <tr>
            <td
              colSpan={6}
              className="py-8 text-center text-gray-500 font-medium"
            >
              Loading live market data...
            </td>
          </tr>
        ) : coins.length > 0 ? (
          coins.map((coin, index) => (
            <tr key={coin.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-4 text-sm text-gray-500">{index + 1}</td>
              <td className="py-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-semibold">{coin.name}</span>
                  <span className="text-gray-400 text-sm uppercase">
                    {coin.symbol}
                  </span>
                </div>
              </td>
              <td className="py-4 font-medium">
                $
                {coin.current_price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td
                className={`py-4 font-medium ${coin.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-500"}`}
              >
                {coin.price_change_percentage_24h >= 0 ? "+" : ""}
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="py-4 hidden md:table-cell">
                <div className="h-8 w-24 bg-gray-100 rounded animate-pulse opacity-50"></div>
              </td>
              <td className="py-4">
                <button
                  onClick={() => navigate("/get-started")}
                  className="bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Buy
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="py-8 text-center text-gray-500">
              Unable to fetch market data. Please try again later.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CryptoTable;
