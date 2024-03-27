import Players from "../Components/Lobby/Players";
import Settings from "../Components/Lobby/Settings";
import CardSelector from "../Components/Lobby/CardSelector";

const Lobbypage = () => {
  return (
    <>
      <div className="flex flex-col gap-5 overflow-scroll p-5 dark:bg-[#2b2f31] sm:h-screen sm:flex-row">
        <div className="flex h-full w-full flex-col gap-5 sm:w-1/3 sm:min-w-[300px]">
          <Players />
          <Settings />
        </div>
        <CardSelector />
      </div>
    </>
  );
};

export default Lobbypage;
