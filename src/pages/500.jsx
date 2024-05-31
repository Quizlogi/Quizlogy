import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function Error500 () {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl">500</h1>
        <h2 className="text-4xl">Internal Server Error</h2>
        <p className="mt-4">Maaf, terjadi kesalahan pada server kami.</p>
        <Link className='mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700' to="/">
          <FaArrowLeft className="mr-2" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

export default Error500