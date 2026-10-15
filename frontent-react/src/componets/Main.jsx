import React from 'react'

const Main = () => {
  return (
    <main className="min-h-[80vh] bg-slate-950 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center">

        <p className="text-emerald-400 font-semibold mb-4">
          SMART INVESTING
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Predict the Market.
          <span className="text-emerald-400"> Plan Your Future.</span>
        </h1>

        <p className="text-slate-300 text-lg leading-8 mb-8">
          Explore stock market trends with StockPredict. Analyze historical
          price movements, discover market patterns, and make more informed
          investment decisions with data-driven insights. Our platform is
          designed to help beginners and experienced investors understand
          market behavior through simple, accessible tools. Track potential
          opportunities, learn how stocks move, and build your confidence
          in financial analysis. Whether you are exploring the stock market
          for the first time or improving your existing strategy, StockPredict
          helps you turn complex market information into useful insights.
          Start exploring today and take the next step toward smarter,
          more informed investing.
        </p>

        <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-semibold text-white transition duration-300">
          Login
        </button>

        <p className="text-slate-500 text-sm mt-6">
          Understand the market. Make informed decisions.
        </p>

      </div>
    </main>
  )
}

export default Main