import React from "react";

const Jobs = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="w-5/6">
        <div>
          <h1 className="text-2xl font-bold md:font-semibold md:text-4xl">
            Careers at IAStream
          </h1>
        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Our Culture</h1>
          <p className="text-base md:text-lg">
          At IAStream, we're building the future of free streaming. We value innovation, creativity, and a passion for entertainment technology.
          </p>

        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Open Positions</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">

            <div className="py-8 px-7 flex flex-col gap-4 bg-hoverBlack rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Senior Software Engineer</h1>
              <p>Location: Remote</p>
              <p>Department: Engineering</p>
              <button className="btn bg-red-600 hover:bg-red-700 border-none text-white">Apply Now</button>
            </div>

            <div className="py-8 px-7 flex flex-col gap-4 bg-hoverBlack rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Content Acquisition Manager</h1>
              <p>Location: Los Santos</p>
              <p>Department: Content</p>
              <button className="btn bg-red-600 hover:bg-red-700 border-none text-white">Apply Now</button>
            </div>

            <div className="py-8 px-7 flex flex-col gap-4 bg-hoverBlack rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">Marketing Specialist</h1>
              <p>Location: Los Angalas</p>
              <p>Department: Marketing</p>
              <button className="btn bg-red-600 hover:bg-red-700 border-none text-white">Apply Now</button>
            </div>

            <div className="py-8 px-7 flex flex-col gap-4 bg-hoverBlack rounded-lg">
              <h1 className="text-lg font-bold md:font-semibold mb-3">System Design</h1>
              <p>Location: India</p>
              <p>Department: IT</p>
              <button className="btn bg-red-600 hover:bg-red-700 border-none text-white">Apply Now</button>
            </div>
            

          </div>
        </div>

        <div className="mt-5 rounded-lg bg-faqBlack py-8 p-6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:font-semibold">Why Work with Us</h1>
          
          <ul className="list-disc marker:text-red-600 ml-14">
            <li>Competitive Compensation</li>
            <li>Innovative work environment</li>
            <li>Global Impact</li>
            <li>Professional Growth opportunities</li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Jobs;