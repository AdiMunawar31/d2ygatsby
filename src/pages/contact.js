import React from "react"
import Layout from "./Layout"

export default function contact() {
  return (
    <Layout>
      <form action className="form bg-purple-800 p-6 my-10 relative">
        <div
          className="icon bg-purple-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
          style={{ left: "-40px" }}
        >
          <i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45" />
        </div>
        <h3 className="text-2xl text-gray-200 font-semibold">
          Let us call you!
        </h3>
        <p className="text-gray-200"> To help you choose your property</p>
        <div className="flex space-x-5 mt-3">
          <input
            type="text"
            name
            id
            placeholder="Your Name"
            className="bg-purple-600 border p-2  w-1/2"
          />
          <input
            type="tel"
            name
            id
            placeholder="Your Number"
            className="bg-purple-600 border p-2 w-1/2"
          />
        </div>
        <input
          type="email"
          name
          id
          placeholder="Your Email"
          className="bg-purple-600 border p-2 w-full mt-3"
        />
        <textarea
          name
          id
          cols={10}
          rows={3}
          placeholder="Tell us about desired property"
          className="bg-purple-600 border p-2 mt-3 w-full"
          defaultValue={""}
        />
        <p className="text-white font-bold text-sm mt-3">GDPR Agreement *</p>
        <div className="flex items-baseline space-x-2 mt-2">
          <input type="checkbox" name id className="inline-block" />
          <p className="text-gray-200 text-sm">
            I consent to having this website store my submitted information so
            they can respond to my inquiry.
          </p>
        </div>
        <input
          type="submit"
          defaultValue="Submit"
          className="w-full mt-6 bg-purple-600 hover:bg-purple-500 text-white font-semibold p-3"
        />
      </form>
    </Layout>
  )
}
