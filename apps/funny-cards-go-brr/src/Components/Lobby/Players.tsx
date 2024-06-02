import PlayerNameCard from "./PlayerNameCard";

const Players = ({}) => {
  return (
    <>
      <div className="relative h-[360px] rounded-xl border-2 border-black p-2 dark:border-[#ddd] dark:text-[#ddd] sm:h-full">
        <h2 className="text-center text-lg font-bold uppercase tracking-widest ">
          Players
        </h2>
        {/* <div className="mt-5">
          <PlayerNameCard customClass={"text-center"} />
        </div> */}

        <button className="dark:border-offWhite absolute bottom-2 right-2 rounded-full border-2 border-black bg-transparent px-6 py-2 text-lg font-bold uppercase tracking-widest transition-all duration-200 hover:bg-[#616467] hover:text-white dark:bg-gray-700 dark:text-neutral-200 dark:hover:border-gray-500  dark:focus:ring-blue-800 dark:sm:bg-transparent dark:sm:hover:bg-gray-700">
          Start
        </button>
      </div>
    </>
  );
};

export default Players;
