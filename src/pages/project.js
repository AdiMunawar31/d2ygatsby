import React from "react"
import Layout from "./Layout"

export default function project() {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto">
        {/* header ends here */}
        <main className="mt-12">
          {/* featured section */}
          <div className="flex md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
            {/* main post */}
            <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
              <img
                src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded-md object-cover w-full h-64"
              />
              <span className="text-purple-200 text-sm hidden md:block mt-4">
                {" "}
                Technology{" "}
              </span>
              <h1 className="text-gray-200 text-4xl font-bold mt-2 mb-2 leading-tight">
                Ignorant branched humanity led now marianne too.
              </h1>
              <p className="text-gray-200 mb-4">
                Necessary ye contented newspaper zealously breakfast he
                prevailed. Melancholy middletons yet understood decisively boy
                law she. Answer him easily are its barton little. Oh no though
                mother be things simple itself. Oh be me, sure wise sons, no.
                Piqued ye of am spirit regret. Stimulated discretion impossible
                admiration in particular conviction up.
              </p>
              <a
                href="./blog.html"
                className="inline-block px-6 py-3 mt-2 rounded-md bg-purple-800 text-gray-100"
              >
                Read more
              </a>
            </div>
            {/* sub-main posts */}
            <div className="w-full md:w-4/7">
              {/* post 1 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-transparent rounded px-4">
                  <span className="text-purple-200 text-sm hidden md:block">
                    {" "}
                    Gadgets{" "}
                  </span>
                  <div className="md:mt-0 text-gray-200 font-semibold text-xl mb-2">
                    At every tiled on ye defer do. No attention suspected oh
                    difficult.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-200">
                    Wonder matter now can estate esteem assure fat roused. Am
                    performed on existence as discourse is. Pleasure friendly at
                    marriage blessing or
                  </p>
                </div>
              </div>
              {/* post 2 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-transparent rounded px-4">
                  <span className="text-purple-200 text-sm hidden md:block">
                    {" "}
                    Bitcoin{" "}
                  </span>
                  <div className="md:mt-0 text-gray-200 font-semibold text-xl mb-2">
                    Fond his say old meet cold find come whom. The sir park sake
                    bred.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-200">
                    Integer commodo, sapien ut vulputate viverra, Integer
                    commodo Integer commodo, sapien ut vulputate viverra,
                    Integer commodo
                  </p>
                </div>
              </div>
              {/* post 3 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-transparent rounded px-4">
                  <span className="text-purple-200 text-sm hidden md:block">
                    {" "}
                    Insights{" "}
                  </span>
                  <div className="md:mt-0 text-gray-200 font-semibold text-xl mb-2">
                    Advice me cousin an spring of needed. Tell use paid law ever
                    yet new.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-200">
                    Meant to learn of vexed if style allow he there. Tiled man
                    stand tears ten joy there terms any widen.
                  </p>
                </div>
              </div>
              {/* post 4 */}
              <div className="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div className="bg-transparent rounded px-4">
                  <span className="text-purple-200 text-sm hidden md:block">
                    {" "}
                    Cryptocurrency{" "}
                  </span>
                  <div className="md:mt-0 text-gray-200 font-semibold text-xl mb-2">
                    Advice me cousin an spring of needed. Tell use paid law ever
                    yet new.
                  </div>
                  <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-200">
                    Meant to learn of vexed if style allow he there. Tiled man
                    stand tears ten joy there terms any widen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end featured section */}
          {/* recent posts */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl text-white">Latest news</h2>
            <a className="bg-purple-800 hover:bg-purple-200 text-gray-300 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-200">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p className="text-gray-200 mt-2">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>
                <a
                  href="#"
                  className="inline-block py-2 rounded text-purple-300 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-200">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p className="text-gray-200 mt-2">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>
                <a
                  href="#"
                  className="inline-block py-2 rounded text-purple-300 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-200">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p className="text-gray-200 mt-2">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>
                <a
                  href="#"
                  className="inline-block py-2 rounded text-purple-300 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* end recent posts */}
          {/* subscribe */}
          <div className="rounded flex md:shadow mt-12">
            <img
              src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="w-0 md:w-1/4 object-cover rounded-l"
            />
            <div className="px-4 py-2">
              <h3 className="text-3xl text-gray-200 font-bold">
                Subscribe to newsletter
              </h3>
              <p className="text-xl text-gray-200">
                We sent latest news and posts once in every week, fresh from the
                oven
              </p>
              <form className="mt-4 mb-10">
                <input
                  type="email"
                  className="rounded bg-gray-100 px-4 py-2 border focus:border-purple-400"
                  placeholder="john@tech.com"
                />
                <button className="px-4 py-2 rounded bg-purple-800 text-gray-100">
                  Subscribe
                  <i className="bx bx-right-arrow-alt" />
                </button>
                <p className="text-purple-300 opacity-50 text-sm mt-1">
                  No spam. We promise
                </p>
              </form>
            </div>
          </div>
          {/* ens subscribe section */}
          {/* popular posts */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl text-white">Popular news</h2>
            <a className="bg-purple-800 hover:bg-purple-200 text-gray-300 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-200">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p className="text-gray-200 mt-2">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>
                <a
                  href="#"
                  className="inline-block py-2 rounded text-purple-300 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-200">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p className="text-gray-200 mt-2">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>
                <a
                  href="#"
                  className="inline-block py-2 rounded text-purple-300 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-200">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p className="text-gray-200 mt-2">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>
                <a
                  href="#"
                  className="inline-block py-2 rounded text-purple-300 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* end popular posts */}
        </main>
        {/* main ends here */}
        {/* footer */}
        <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5">
              <p className="text-gray-200 hidden lg:block p-0 lg:pr-12">
                Boisterous he on understood attachment as entreaties ye
                devonshire. In mile an form snug were been sell. Extremely ham
                any his departure for contained curiosity defective. Way now
                instrument had eat diminution melancholy expression sentiments
                stimulated.
              </p>
            </div>
            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-300 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-300 mb-4">Content</h6>
              <ul>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    Blog
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    Terms &amp; Conditions
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    Documentation
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-300 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href className="block text-gray-200 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
}
