import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl">404</h1>
        <h2 className="text-4xl">Page Not Found</h2>
        <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
        <Link className='mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700' to="/">
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export default Error404