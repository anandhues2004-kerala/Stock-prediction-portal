import axios from 'axios'
import React, { useEffect } from 'react'
import axiosInstance from '../axiosinstance'

const OrgDash = () => {
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
        console.log('Success:', response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchProtectedData()
  }, [])

  return <div>OrgDash</div>
}

export default OrgDash