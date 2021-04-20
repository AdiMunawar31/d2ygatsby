import { Link } from "gatsby"
import React from "react"
import Layout from "./Layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <main className="w-full">
          <div className="relative ">
            <div className="sliderAx h-4/5">
              <div id="slider-2" className=" mx-auto">
                <div
                  className="bg-cover bg-top  h-auto text-white py-24 px-10 object-fill"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
                  }}
                >
                  <p className="font-bold text-sm uppercase">Services</p>
                  <p className="text-3xl font-bold">Hello world</p>
                  <p className="text-2xl mb-10 leading-none">
                    Carousel with TailwindCSS and jQuery
                  </p>
                  <Link
                    to="/contact"
                    target="_blank"
                    className="bg-purple-700 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                  >
                    Contact us
                  </Link>
                </div>{" "}
                {/* container */}
                <br />
              </div>
            </div>
            <div className="flex justify-between w-12 mx-auto pb-2">
              <button
                id="sButton1"
                onclick="sliderButton1()"
                className="bg-purple-400 rounded-full w-4 pb-2 "
              />
              <button
                id="sButton2"
                onclick="sliderButton2() "
                className="bg-purple-400 rounded-full w-4 p-2"
              />
            </div>
          </div>
          <div className="container mx-auto">
            <h1 className="text-center text-gray-200 py-6 text-5xl ">
              About Me
            </h1>
            <div className="text-gray-200">
              <div className="grid grid-cols-6 mb-20">
                <div className="col-span-1 text-center text-6xl py-4">
                  <img
                    src="https://adi-munawar.netlify.app/static/media/p.d0a4e270.jpg"
                    width="120"
                    className="ml-10 rounded-full border-4 border-gray-100 shadow-sm"
                  />
                </div>
                <div className="col-span-5">
                  <h3 className="text-gray-200 mt-5">
                    At duo ipsum amet sit dolor no duo et, tempor takimata
                    takimata eirmod dolor est sed, tempor ut no et.Sed justo no
                    dolores eirmod accusam duo labore sea, tempor dolore labore
                    erat kasd dolor lorem amet. Sed nonumy ut justo ipsum at
                    magna sit dolores. Ea ipsum dolor invidunt amet est ut
                    invidunt invidunt eirmod, accusam eos et lorem accusam sed.
                    Nonumy erat clita nonumy erat et, aliquyam et et sit
                    invidunt aliquyam sed justo. Nonumy labore tempor takimata
                    ipsum sanctus justo eirmod, ut clita sit et ipsum sed amet
                    vero sanctus. Duo diam amet sea stet. Est sit clita sed
                    justo lorem, ut lorem tempor sanctus lorem eirmod, et justo
                    voluptua invidunt tempor no diam diam et, invidunt.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-800">
            <div className="container mx-auto">
              <div className="flex py-16 items-center justify-center">
                <div className="text-white bg-purple-700 rounded-2xl shadow-lg px-20 py-4 mx-2 text-xl">
                  All{" "}
                </div>
                <div className="text-purple-700  bg-white rounded-2xl shadow-lg px-20 py-4 mx-2 text-xl">
                  Graphic
                </div>
                <div className="text-purple-700  bg-white rounded-2xl shadow-lg px-20 py-4 mx-2 text-xl">
                  UI/UX
                </div>
                <div className="text-purple-700  bg-white rounded-2xl shadow-lg px-20 py-4 mx-2 text-xl">
                  Branding
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 p-8">
            <div className="col-span-1 py-6">
              <div className="relative">
                <a href="http://tradydaddy.com/" target="_blank">
                  <img
                    src="https://picsum.photos/id/200/400/400"
                    alt=""
                    className="rounded-2xl relative"
                  />
                  <div className="absolute bottom-0 left-0 text-xl p-4 w-full text-white font-bold">
                    <p>Absolute child</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1 py-6">
              <div className="relative">
                <a href="http://tradydaddy.com/" target="_blank">
                  <img
                    src="https://picsum.photos/id/201/400/400"
                    alt=""
                    className="rounded-2xl relative"
                  />
                  <div className="absolute bottom-0 left-0 text-xl p-4 w-full text-white font-bold">
                    <p>Absolute child</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1 py-6">
              <div className="relative">
                <a href="http://tradydaddy.com/" target="_blank">
                  <img
                    src="https://picsum.photos/id/202/400/400"
                    alt=""
                    className="rounded-2xl relative"
                  />
                  <div className="absolute bottom-0 left-0 text-xl p-4 w-full text-white font-bold">
                    <p>Absolute child</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1 py-6">
              <div className="relative">
                <a href="http://tradydaddy.com/" target="_blank">
                  <img
                    src="https://picsum.photos/id/203/400/400"
                    alt=""
                    className="rounded-2xl relative"
                  />
                  <div className="absolute bottom-0 left-0 text-xl p-4 w-full text-white font-bold">
                    <p>Absolute child</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1 py-6">
              <div className="relative">
                <a href="http://tradydaddy.com/" target="_blank">
                  <img
                    src="https://picsum.photos/id/204/400/400"
                    alt=""
                    className="rounded-2xl relative"
                  />
                  <div className="absolute bottom-0 left-0 text-xl p-4 w-full text-white font-bold">
                    <p>Absolute child</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1 py-6">
              <div className="relative">
                <a href="http://tradydaddy.com/" target="_blank">
                  <img
                    src="https://picsum.photos/id/208/400/400"
                    alt=""
                    className="rounded-2xl relative"
                  />
                  <div className="absolute bottom-0 left-0 text-xl p-4 w-full text-white font-bold">
                    <p>Absolute child</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1 py-6">
              <div className="relative">
                <a href="http://tradydaddy.com/" target="_blank">
                  <img
                    src="https://picsum.photos/id/206/400/400"
                    alt=""
                    className="rounded-2xl relative"
                  />
                  <div className="absolute bottom-0 left-0 text-xl p-4 w-full text-white font-bold">
                    <p>Absolute child</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-1 py-6">
              <div className="relative">
                <a href="http://tradydaddy.com/" target="_blank">
                  <img
                    src="https://picsum.photos/id/209/400/400"
                    alt=""
                    className="rounded-2xl relative"
                  />
                  <div className="absolute bottom-0 left-0 text-xl p-4 w-full text-white font-bold">
                    <p>Absolute child</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
