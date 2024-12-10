import ListElement from "./ListElement";
import { GameListProps } from "./types";

export default function GamesList({ games }: { games: GameListProps[] }) {
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
            id={id}
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
