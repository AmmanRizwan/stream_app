import React from "react";

const Investor = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="w-5/6">
        <div>
          <h1 className="text-2xl font-bold md:font-semibold md:text-4xl">
            IAStream Investor Relations
          </h1>
        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Company Overview</h1>
          <p className="text-base md:text-lg">
          IAStream is a revolutionary free streaming platform committed to accessible global entertainment. Our mission is to democratize content consumption through innovative technology and strategic partnerships.
          </p>

        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Financial Metrics</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

            <div className="py-8 flex flex-col items-center bg-hoverBlack rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">User Base</h1>
              <p>5.2M Active Users</p>
            </div>
            
            <div className="bg-hoverBlack rounded-lg flex flex-col items-center py-8">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Revenue Growth</h1>
              <p>42% Year-over-Year</p>
            </div>

            <div className="bg-hoverBlack rounded-lg flex flex-col items-center py-8">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Content Library</h1>
              <p>10,000+ Titles</p>
            </div>

          </div>
        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Investment Highlights</h1>
          
          <ul className="list-disc marker:text-red-600 ml-14">
            <li>Disruptive free streaming model</li>
            <li>Rapid user acquisition strategy</li>
            <li>Innovative advertising integration</li>
            <li>Global Content expansion</li>
          </ul>

        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Investor Contact</h1>
          
          <p className="text-base md:text-lg"><span className="font-semibold">Email:</span> investors@gmail.com</p>

          <button className="btn bg-red-600 text-white hover:bg-red-700 md:flex md:w-96">Request Investor Deck</button>
        </div>

      </div>
    </div>
  )
}

export default Investor;