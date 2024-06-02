const CardSelector = () => {
  return (
    <>
      <div className="bg-white-500 h-[360px] w-full rounded-xl border-2 border-black dark:border-[#ddd] dark:text-[#ddd] sm:h-full sm:w-2/3">
        <h2 className="text-center text-xl font-bold uppercase tracking-widest ">
          Card Selector
        </h2>
        <div className="mt-5 flex justify-center sm:mt-10">
          <div className="relative flex h-10 w-3/4 items-center justify-center rounded-full border-2 border-black dark:border-gray-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:h-12">
            <svg
              className="absolute left-3 h-4 w-4 text-gray-500 dark:text-gray-400 sm:h-6 sm:w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <input
              type="search"
              className=" block w-full bg-transparent p-3 text-center text-lg outline-none "
              placeholder="Enter Card Pack Name"
              maxLength={30}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSelector;
