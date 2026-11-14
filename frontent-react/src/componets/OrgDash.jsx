import React, { use, useEffect, useState } from 'react'
import axiosInstance from '../axiosinstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const OrgDash = () => {
  const[ticker,setTicker]=useState('')
  const[error,setError]=useState('')
  const[loading,setLoading]=useState(false)
  const[plot,setPlot]=useState("")
  const[ma100,setMa100]=useState('')
  const[ma200,setMa200]=useState('')
  const[final,setFinal]=useState('')
  const handleSumbit= async (e)=>{
    e.preventDefault();
    setLoading(true)
    try{
      const response= await axiosInstance.post('/prediction/',{ticker:ticker})
      console.log(response.data);
      const backend_root=import.meta.env.VITE_BACKEND_ROOT

      if(response.data.error){
        setError(response.data.error)
        setPlot('')
        setMa100('')
        setMa200('')
        setFinal('')
      }else{
        const plotUrl=`${backend_root}${response.data.plot_img}`
        const ma100Url=`${backend_root}${response.data.plot_100_dma}`
        const ma200Url=`${backend_root}${response.data.plot_200_dma}`
        const finalUrl=`${backend_root}${response.data.plot_prediction}`
        setPlot(plotUrl)
        setMa100(ma100Url)
        setMa200(ma200Url)
        setFinal(finalUrl)
      }
    }catch(error){
      console.log('error was api request',error);
    }finally{
      setLoading(false)
    }

  }
  useEffect(() => {
    // const accessToken = localStorage.getItem('accessToken')

    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get(
          '/protected-view/'
          // {
          //   // headers: {
          //   //   Authorization: `Bearer ${accessToken}`,
          //   // },
          // }
        )
         console.log('GET:', response.data)
      } catch (error) {
        // console.error('Error fetching data:', error)
      }
    }

    fetchProtectedData()
  }, [])

return (
  <div className="bg-slate-950 px-4 py-16 md:py-24">
    <div className="mx-auto max-w-4xl">
      {/* page heading */}
      <div className="text-center">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Stock Price <span className="italic text-rose-400">Prediction</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-slate-400">
          Enter a stock ticker and let the model analyze 10 years of market history to forecast where the price is heading.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-10">
        <div className="w-full max-w-xl">
          <form
            onSubmit={handleSumbit}
            className="flex flex-col items-center gap-4 rounded-md border border-slate-700 bg-slate-900/60 p-8"
          >
            <input
              type="text"
              className="w-full rounded border border-slate-700 bg-slate-950 px-4 py-3.5 text-base font-medium uppercase tracking-widest text-white placeholder-slate-600 transition focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 hover:border-slate-500"
              placeholder="Enter stock ticker"
              onChange={(e)=>setTicker(e.target.value)}required
              
            />
            <small className="w-full">{error && <div className='w-full rounded border border-red-500/40 bg-red-950/40 px-4 py-2.5 text-center text-sm font-medium text-red-300'>{error}</div> }</small>
            <button
              type='submit'
              className='w-full rounded bg-rose-500 px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-slate-900'
            >
              {loading ? <span className="inline-flex items-center justify-center gap-2"><FontAwesomeIcon icon={faSpinner} spin />processing</span>:"see predictions" }</button>
          </form>
        </div>
        {/* prediction plot */}
        <div className='w-full'>
          {plot &&( 
            <div className="rounded-md border border-slate-700 bg-slate-900/60 p-3">
              <img src={plot} alt="Stock prediction plot" className="w-full rounded bg-white" />
            </div>
          )}

        </div>
        {/* 100 days */}
        <div>
          {ma100&&(
            <img src={ma100} alt="Stock prediction plot" className="w-full rounded bg-white" />

          )}

        </div>

        {/* 200 days */}
        <div>
          {ma200&&(
            <img src={ma200} alt="Stock prediction plot" className="w-full rounded bg-white" />

          )}

        </div>
        #final prediction
        <div>
           {final&&(
            <img src={final} alt="Stock prediction plot" className="w-full rounded bg-white" />

          )}
          
        </div>
      </div>
    </div>
  </div>
)
}

export default OrgDash