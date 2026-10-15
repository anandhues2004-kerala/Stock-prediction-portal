import React from 'react'

const Header = () => {
  return (
    <nav className="bg-slate-950 text-white px-6 py-4 shadow-lg">
<div className="max-w-7xl mx-auto flex items-center justify-between">

    {/* Left side: Logo */}
    <h1 className="text-2xl font-bold">
      <span className="text-emerald-400">Stock</span>Predict
    </h1>

    {/* Right side: Login and Register */}
    <div className="flex items-center gap-4">
      <button className="text-slate-300 hover:text-white transition">
        Login
      </button>

      <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-lg font-semibold transition">
        Register
      </button>
    </div>

  </div>
</nav>
    
  )
}

export default Header