import React from "react";

const Cookie = () => {
  return (
    <div className="flex justify-center py-10">

      <div className="w-5/6">
        <div className="p-4 py-8 bg-faqBlack rounded-md">
          
          <h1 className="text-2xl md:text-4xl font-bold md:font-semibold mb-2">Cookie Preferences</h1>
          <hr />

          <div className="flex flex-col gap-4 my-4">
          
          <div className="flex justify-between items-center bg-hoverBlack p-4 rounded-md">
            <div>
              <h1 className="text-lg font-semibold md:text-xl mb-4">Essential Cookies</h1>
              <p className="text-sm md:text-lg">Necessary for website functionality</p>
            </div>

            <div>
            <input type="checkbox" className="toggle bg-red-600 border-red-600 text-red-600 [--tglbg:gray] hover:bg-red-600 " defaultChecked/>
            </div>
          </div>

          <div className="flex justify-between items-center bg-hoverBlack p-4 rounded-md">
            <div>
              <h1 className="text-lg font-semibold md:text-xl mb-4">Performance Cookies</h1>
              <p className="text-sm md:text-lg">Help improve website performance</p>
            </div>

            <div>
            <input type="checkbox" className="toggle bg-red-600 border-red-600 text-red-600 [--tglbg:gray] hover:bg-red-600 " defaultChecked />
            </div>
          </div>

          <div className="flex justify-between items-center bg-hoverBlack p-4 rounded-md">
            <div>
              <h1 className="text-lg font-semibold md:text-xl mb-4">Advertising Cookies</h1>
              <p className="text-sm md:text-lg">Personalize advertising experience</p>
            </div>

            <div>
            <input type="checkbox" className="toggle bg-red-600 border-red-600 text-red-600 [--tglbg:gray] hover:bg-red-600 " defaultChecked/>
            </div>
          </div>

          <div className="flex justify-between items-center bg-hoverBlack p-4 rounded-md">
            <div>
              <h1 className="text-lg font-semibold md:text-xl mb-4">Analytics Cookies</h1>
              <p className="text-sm md:text-lg">Understand website usage</p>
            </div>

            <div>
            <input type="checkbox" className="toggle bg-red-600 border-red-600 text-red-600 [--tglbg:gray] hover:bg-red-600 "/>
            </div>
          </div>

          <button onClick={()=> alert("Cookie preferences saved successfully!")} className="transition-all duration-600 py-2 bg-red-600 hover:bg-red-700 rounded-full mt-3 mx-4 transform hover:scale-[0.99] active:scale-[1.01] ">Save Preference</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Cookie;