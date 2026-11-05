import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', actual: 190, predicted: null },
  { day: 'Tue', actual: 194, predicted: null },
  { day: 'Wed', actual: 192, predicted: null },
  { day: 'Thu', actual: 198, predicted: 198 },
  { day: 'Fri', actual: null, predicted: 201 },
  { day: 'Sat', actual: null, predicted: 204 },
  { day: 'Sun', actual: null, predicted: 203 },
]

const stats = [
  { label: 'Current Price', value: '$198.00', sub: '+1.24% today', bar: 'bg-emerald-500', text: 'text-emerald-400' },
  { label: 'Predicted Price', value: '$201.00', sub: '+1.52% next day', bar: 'bg-amber-500', text: 'text-amber-400' },
  { label: 'Confidence', value: '82%', sub: 'High accuracy', bar: 'bg-sky-500', text: 'text-sky-400' },
  { label: 'Signal', value: 'BUY', sub: 'Strong momentum', bar: 'bg-emerald-500', text: 'text-emerald-400', glow: true },
]

const cardCls =
  'relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40 backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:border-white/20'

const Tip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/95 px-4 py-2.5">
      <div className="mb-1 text-xs text-slate-400">{label}</div>
      {payload.filter((p) => p.value != null).map((p) => (
        <div key={p.dataKey} className="text-sm font-semibold" style={{ color: p.color }}>
          {p.dataKey === 'actual' ? 'Actual' : 'Predicted'}: ${p.value}
        </div>
      ))}
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-[#070b14] bg-[radial-gradient(900px_500px_at_10%_-10%,rgba(99,102,241,0.22),transparent_60%),radial-gradient(800px_500px_at_100%_0%,rgba(245,158,11,0.12),transparent_60%)] px-6 py-8 text-slate-200">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="bg-[linear-gradient(90deg,#fff,#a5b4fc)] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              Stock Prediction Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-400">AI-powered price forecast</p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold backdrop-blur-md">
            AAPL · Apple Inc.
          </div>
        </div>

        {/* Stat cards */}
        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className={cardCls}>
              <div className={`absolute inset-x-0 top-0 h-[3px] ${s.bar}`} />
              <div className="text-xs uppercase tracking-widest text-slate-400">{s.label}</div>
              <div className={`mt-2 text-3xl font-bold tracking-tight ${s.glow ? s.text + ' drop-shadow-[0_0_14px_rgba(34,197,94,0.6)]' : ''}`}>
                {s.value}
              </div>
              <div className={`mt-1 text-sm font-semibold ${s.text}`}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className={cardCls}>
          <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#6366f1,#f59e0b)]" />
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold">Price Trend &amp; Forecast</h3>
            <div className="flex gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-indigo-500" />Actual</span>
              <span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-amber-500" />Predicted</span>
            </div>
          </div>

          <div className="h-80 sm:h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gP" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                <XAxis dataKey="day" stroke="#5b6377" tickLine={false} axisLine={false} />
                <YAxis domain={['dataMin - 3', 'dataMax + 3']} stroke="#5b6377" tickLine={false} axisLine={false} />
                <Tooltip content={<Tip />} />
                <Area dataKey="actual" stroke="#6366f1" strokeWidth={3} fill="url(#gA)" dot={false} activeDot={{ r: 6 }} />
                <Area dataKey="predicted" stroke="#f59e0b" strokeWidth={3} strokeDasharray="6 5" fill="url(#gP)" dot={false} activeDot={{ r: 6 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">Not financial advice. All numbers are dummy data.</p>
      </div>
    </div>
  )
}

export default Dashboard