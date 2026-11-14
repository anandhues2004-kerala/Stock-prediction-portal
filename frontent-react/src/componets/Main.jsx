import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from './Authprovider'

const Main = () => {
  // const { isLoggedIn } = useContext(AuthContext)

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-950 text-white flex items-center px-6 py-16">
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">

        {/* Left: text */}
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium text-slate-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Smart investing
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Predict the market.
            <span className="block text-emerald-400">Plan your future.</span>
          </h1>

          <p className="text-slate-400 text-lg leading-8 mb-10 max-w-lg mx-auto lg:mx-0">
            Explore stock trends with StockPredict. Study historical price
            movements and make more informed investment decisions, whether you
            are just starting out or refining your strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              to={'/explore'}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-8 py-3.5 rounded-xl transition"
            >
              Explore Now →
            </Link>
            <span className="text-sm text-slate-500">No experience needed</span>
          </div>
        </div>

        {/* Right: chart preview */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/40">

            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">Sample stock</p>
                <p className="text-3xl font-bold mt-1">$182.40</p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-400">
                +2.4%
              </span>
            </div>

            <svg viewBox="0 0 400 200" className="mt-6 w-full h-auto">
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,150 L40,130 L80,140 L120,100 L160,115 L200,80 L240,95 L280,50 L320,65 L360,30 L400,40 L400,200 L0,200 Z"
                fill="url(#chartFill)"
              />
              <path
                d="M0,150 L40,130 L80,140 L120,100 L160,115 L200,80 L240,95 L280,50 L320,65 L360,30 L400,40"
                fill="none"
                stroke="#34d399"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="mt-4 flex justify-between text-xs text-slate-500">
              <span>1D</span>
              <span>1W</span>
              <span>1M</span>
              <span>6M</span>
              <span>1Y</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Main