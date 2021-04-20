import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav className="w-full flex bg-transparent lg:px-8 px-4 py-4 text-white items-center relative justify-between md:justify-start">
      <div className="mr-auto md:hidden block">
        <button className="p-2 text-gray-300 focus:outline-none focus:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
      </div>
      <div className="flex text-xl font-bold tracking-wider space-x-2 md:mx-0 mx-auto">
        <span>Adi Munawar</span>
      </div>
      <ul className="text-gray-300 flex md:space-x-2 p-2 md:px-0 md:space-y-0 space-y-1 md:ml-4 md:relative absolute top-full bg-transparent flex-col md:flex-row left-0 right-0">
        <li>
          <Link
            to="/"
            className="font-semibold px-2 py-1 hover:bg-purple-800 active rounded-md block link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="font-semibold px-2 py-1 hover:bg-purple-800 hover:text-white rounded-md block link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className="font-semibold px-2 py-1 hover:bg-purple-800 hover:text-white rounded-md block link"
          >
            My Project
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="font-semibold px-2 py-1 hover:bg-purple-800 hover:text-white rounded-md block link"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="ml-auto flex space-x-2 items-center">
        <button className="inline-flex p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:text-white text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z" />
          </svg>
        </button>
        <div className="flex items-center relative space-y-1">
          <button className="rounded-full overflow-hidden focus:ring-2 focus:ring-white focus:outline-none">
            <img
              className=" w-8 h-8"
              src="https://adi-munawar.netlify.app/static/media/p.d0a4e270.jpg"
            />
          </button>
        </div>
      </div>
    </nav>
  )
}
