import React from "react";

const CorporateInfo = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="w-5/6">
        <div>
          <h1 className="text-2xl font-bold md:font-semibold md:text-4xl">
            Only on IAStream
          </h1>
        </div>
        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold underline decoration-red-600">Open Positions</h1>

          <div className="grid sm:grid-cols-2 ">

            <div className="py-8 px-7 flex flex-col gap-4 rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Company Name:</h1>
              <p>IAStream Corporation</p>
              <h1 className="text-lg font-bold md:font-semibold mb-3">Founding Date:</h1>
              <p>January {new Date().getFullYear()}</p>
            </div>

            <div className="py-8 px-7 flex flex-col gap-4 rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Headquarters:</h1>
              <p>San Francisco, California</p>
              <h1 className="text-lg font-bold md:font-semibold mb-3">Business Model:</h1>
              <p>Free Streaming Platform</p>
            </div>
            
          </div>
        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold underline decoration-red-600">Leadership</h1>
          
          <ul className="list-disc marker:text-red-600 ml-14">
            <li>CEO: Alex Rodriguez</li>
            <li>CTO: Sarah Chen</li>
            <li>CFO: Michael Thompsone</li>
          </ul>

        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold underline decoration-red-600">Mission Statement</h1>
          <p className="text-base md:text-lg">
            To democratize entertainment by providing free, high-quality streaming content to a global audience, breaking down barriers to access and fostering cultural exchange through technology.
          </p>
        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold underline decoration-red-600">Key Statistics</h1>
          
          <ul className="list-disc marker:text-red-600 ml-14">
            <li>User Base: 5.2 Million Active Users.</li>
            <li>Content Library: 10,000+ Titles</li>
            <li>Geographical Reach: 50+ Countries</li>
          </ul>

        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold underline decoration-red-600">Contact Information</h1>
          
          <ul className="list-disc marker:text-red-600 ml-14">
            <li>Corporate Headquaters:</li>
            <li>123 Fake Streaming Avenue</li>
            <li>San Francisco, CA 94105</li>
            <li>Email: corporate@iastream.com</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default CorporateInfo;