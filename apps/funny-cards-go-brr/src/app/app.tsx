import NxWelcome from "./nx-welcome";
import Homepage from "../Home/Homepage";
import Lobbypage from "../Lobby/Lobbypage";

export function App() {
  return (
    <div className="">
      {/* <NxWelcome title="funny-cards-go-brr" /> */}
      <Homepage />
      <Lobbypage />
    </div>
  );
}

export default App;
