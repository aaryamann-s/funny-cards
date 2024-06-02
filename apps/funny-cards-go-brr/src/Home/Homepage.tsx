const Homepage = () => {
  return (
    <>
      {/* TODO: done
      for dark mode : bg-[#2b2f31] */}

      <div className=" flex h-screen flex-col items-center justify-start bg-[#ddd] dark:bg-[#2b2f31]">
        <div className="mt-10 mb-20 text-center text-4xl font-bold dark:text-[#ddd] sm:text-5xl">
          Funny Cards Go brrrr
        </div>
        <form className=" w-3/4 max-w-md">
          <label
            htmlFor="player-name-input"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Name
          </label>
          <div className="relative">
            <input
              type="input"
              id="player-name-input"
              className="block w-full rounded-full border-2 border-black bg-transparent p-3 text-center text-lg outline-none  focus:border-sky-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Enter Your Name"
              required
              maxLength={15}
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>
            <div className="mt-32 flex w-full flex-col sm:flex-row">
              <button
                type="submit"
                // className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black p-[1px] text-lg font-semibold hover:border-[#CEA281] hover:bg-[#CEA281] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-[#ddd] dark:bg-gray-700 dark:text-white dark:hover:border-gray-500 dark:focus:ring-blue-800 dark:sm:bg-transparent dark:sm:hover:bg-gray-700"
                className="rounded-full border-2 border-black bg-transparent px-10 py-2.5 font-bold uppercase tracking-widest transition-all duration-200 hover:bg-[#616467] hover:text-white dark:border-neutral-200 dark:bg-gray-700 dark:text-neutral-200 dark:hover:border-gray-500  dark:focus:ring-blue-800 dark:sm:bg-transparent dark:sm:hover:bg-gray-700"
              >
                {/* <span className="relative rounded-full bg-[#ddd] px-10 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-transparent"> */}
                Host
                {/* </span> */}
              </button>
              <button
                type="submit"
                // className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black p-[1px] text-lg font-semibold hover:border-[#CEA281] hover:bg-[#CEA281] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-[#ddd] dark:bg-gray-700 dark:text-white dark:hover:border-gray-500 dark:focus:ring-blue-800 sm:mt-0 sm:ml-auto dark:sm:bg-transparent dark:sm:hover:bg-gray-700"
                className="mt-10 rounded-full border-2 border-black bg-transparent px-10 py-2.5 font-bold uppercase tracking-widest transition-all duration-200 hover:bg-[#616467] hover:text-white dark:border-neutral-200 dark:bg-gray-700 dark:text-neutral-200 dark:hover:border-gray-500  dark:focus:ring-blue-800 sm:mt-0 sm:ml-auto dark:sm:bg-transparent dark:sm:hover:bg-gray-700"
              >
                {/* <span className="relative rounded-full bg-[#ddd] px-10 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-transparent"> */}
                Join
                {/* </span> */}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Homepage;
