import { getGames } from "@/repositories/games";
import ListElement from "./ListElement";

export default function GamesList() {
  const games = getGames();
  return (
    <div className='flex flex-col w-full gap-4'>
      {games.map((game) => {
        const {
          id,
          name,
          releaseYear,
          players,
          publisher,
          expansions,
          standalone,
          type,
        } = game;
        return (
          <ListElement
            key={id}
            name={name}
            releaseYear={releaseYear}
            players={players}
            publisher={publisher}
            expansions={expansions}
            standalone={standalone}
            type={type}
          />
        );
      })}
    </div>
  );
}
