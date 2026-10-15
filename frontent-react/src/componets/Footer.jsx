import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-6 px-4">

      <div className="flex flex-col items-center justify-center text-center gap-3">

        <h2 className="text-xl font-bold">
          <span className="text-emerald-400">Stock</span>Predict
        </h2>

        <p className="text-slate-400 text-sm">
          Smart insights for informed investing.
        </p>
        <hr className="border-slate-700 w-full max-w-7xl my-2" />

        <p className="text-slate-500 text-xs">
          © 2026 StockPredict. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer