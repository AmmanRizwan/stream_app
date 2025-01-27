import React from "react";

const OnlyIAStream = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="w-5/6">
        <div>
          <h1 className="text-2xl font-bold md:font-semibold md:text-4xl">
            Only on IAStream
          </h1>
        </div>



        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Open Positions</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

            <div className="py-8 px-7 flex flex-col gap-4 bg-hoverBlack rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Original Series</h1>
              <p>Unique productions not available anywhere else</p>
            </div>

            <div className="py-8 px-7 flex flex-col gap-4 bg-hoverBlack rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Limited Release Films</h1>
              <p>First-run movies before global release</p>
            </div>

            <div className="py-8 px-7 flex flex-col gap-4 bg-hoverBlack rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Indie Creator Hub</h1>
              <p>Platform for emerging content creators</p>
            </div>
            
          </div>
        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Unique Platform Features</h1>
          
          <ul className="list-disc marker:text-red-600 ml-14">
            <li>Zero-cost streaming without mandatory subscriptions</li>
            <li>Global content with multi-language support</li>
            <li>No geographical content restrictions</li>
            <li>Community-driven content recommendation</li>
          </ul>

        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Exclusive Partnerships</h1>
          <p className="text-base md:text-lg">
            Collaborative content with independent studios and global creators unavailable on other platforms.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OnlyIAStream;