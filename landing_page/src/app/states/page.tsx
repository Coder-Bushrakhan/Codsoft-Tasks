export default function Page()
{
    return(
        <div>
            <div className="flex flex-col justify-center items-center bg-gray-50">
      <div className="text-xl md:text-3xl text-orange-500 font-bold uppercase mt-4">
       statistics
      </div>
      <div className="border-b-4 border-orange-500 -mt-2">
        {" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
  
    </div>
            <div className="flex items-center justify-center bg-gray-50 p-4">
  <div className="flex flex-col max-w-7xl w-full md:w-[70%]">
    <div className="flex flex-col lg:flex-row ">
      <div className="bg-white  hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110 shadow-2xl rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
        <div className="flex items-center justify-start w-full">
          <div className="flex-col w-[85%]">
            <div className="text-sm font-medium text-violet-600 my-2">
              Total Income
            </div>
            <div className="class flex items-center">
              <div className="text-3xl font-bold text-gray-700">$2,30,568</div>
              <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                <div className="text-xs bg-green-200 px-2 rounded-lg">
                  + 78%
                </div>
              </div>
            </div>
            <div className="w-full h-1 rounded bg-gray-300 my-1">
              <div className="w-[78%] h-1 rounded bg-green-500" />
            </div>
            <div className="text-xs font-medium text-gray-400 ">
              Weekly Goal
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-2xl hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110  rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
        <div className="flex items-center justify-start w-full">
          <div className="flex-col w-[85%]">
            <div className="text-sm font-medium text-violet-600 my-2">
              Engaged Users
            </div>
            <div className="class flex items-center">
              <div className="text-3xl font-bold text-gray-700">32.78%</div>
              <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                <div className="text-xs bg-red-200 px-2 rounded-lg">- 7%</div>
              </div>
            </div>
            <div className="w-full h-1 rounded bg-gray-300 my-1">
              <div className="w-[33%] h-1 rounded bg-red-500" />
            </div>
            <div className="text-xs font-medium text-gray-400 ">Daily Goal</div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row ">
      <div className="bg-white shadow-2xl  hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110  rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
        <div className="flex items-center justify-start w-full">
          <div className="flex-col w-[85%]">
            <div className="text-sm font-medium text-violet-600 my-2">
              Weekly Income
            </div>
            <div className="class flex items-center">
              <div className="text-3xl font-bold text-gray-700">$6,568</div>
              <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                <div className="text-xs bg-green-200 px-2 rounded-lg">
                  + 54%
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 ">
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[20%] w-6 rounded-tr rounded-tl bg-green-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Mon
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[60%] w-6 rounded-tr rounded-tl bg-green-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Tue
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[70%] w-6 rounded-tr rounded-tl bg-green-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Wed
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[44%] w-6 rounded-tr rounded-tl bg-green-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Thu
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[87%] w-6 rounded-tr rounded-tl bg-green-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Fri
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[55%] w-6 rounded-tr rounded-tl bg-green-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Sat
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[34%] w-6 rounded-tr rounded-tl bg-green-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Sun
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-2xl hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110  rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
        <div className="flex items-center justify-start w-full">
          <div className="flex-col w-[85%]">
            <div className="text-sm font-medium text-violet-600 my-2">
              Weekly Users
            </div>
            <div className="class flex items-center">
              <div className="text-3xl font-bold text-gray-700">16,568</div>
              <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                <div className="text-xs bg-red-200 px-2 rounded-lg">- 8.7%</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 ">
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[79%] w-6 rounded-tr rounded-tl bg-violet-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Mon
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[20%] w-6 rounded-tr rounded-tl bg-violet-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Tue
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[30%] w-6 rounded-tr rounded-tl bg-violet-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Wed
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[44%] w-6 rounded-tr rounded-tl bg-violet-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Thu
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[67%] w-6 rounded-tr rounded-tl bg-violet-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Fri
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[25%] w-6 rounded-tr rounded-tl bg-violet-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Sat
                </div>
              </div>
              <div className="flex-col">
                <div className="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2">
                  <div className="h-[64%] w-6 rounded-tr rounded-tl bg-violet-300" />
                </div>
                <div className="text-xs font-medium ml-2 text-gray-500">
                  Sun
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>


    )
}
