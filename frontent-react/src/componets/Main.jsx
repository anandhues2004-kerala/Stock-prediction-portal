import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Authprovider'

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext)

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

        <p className="text-slate-500 text-sm mt-6">
          Understand the market. Make informed decisions.
        </p>

        <Link
          to={isLoggedIn ? '/explore' : '/login'}
          className="bg-emerald-500 px-5 py-2 rounded inline-block mt-6"
        >
          Explore Now
        </Link>

      </div>
    </main>
  )
}

export default Main