"use client";
import { useState } from "react";
import Filters from "./Filters";
import GamesList from "./GamesList";
import { GameListProps } from "./types";

export default function SortableGameList({
  games,
}: {
  games: GameListProps[];
}) {
  const [selectedPublishers, setSelectedPublishers] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<{
    from: number | null;
    to: number | null;
  }>({ from: null, to: null });
  const [playerRange, setPlayerRange] = useState<{
    from: number | null;
    to: number | null;
  }>({ from: null, to: null });

  const publishers = [...new Set(games.map((game) => game.publisher))];

  const filteredGames = games.filter((game) => {
    const publisherMatch =
      selectedPublishers.length === 0 ||
      selectedPublishers.includes(game.publisher);

    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(game.type);

    const yearMatch =
      (!yearRange.from || game.releaseYear >= yearRange.from) &&
      (!yearRange.to || game.releaseYear <= yearRange.to);

    console.log(
      game.name,
      !playerRange.from || game.players.min >= playerRange.from
    );

    const playerMatch =
      (!playerRange.from || game.players.min >= playerRange.from) &&
      (!playerRange.to ||
        (game.players.max ? game.players.max <= playerRange.to : true));

    return publisherMatch && typeMatch && yearMatch && playerMatch;
  });

  return (
    <div className='container mx-auto flex divide-x h-screen gap-4'>
      <div className='w-1/6'>
        <Filters
          publishers={publishers}
          selectedPublishers={selectedPublishers}
          onPublisherChange={setSelectedPublishers}
          selectedTypes={selectedTypes}
          onTypeChange={setSelectedTypes}
          yearRange={yearRange}
          onYearChange={setYearRange}
          playerRange={playerRange}
          onPlayerChange={setPlayerRange}
        />
      </div>
      <div className='p-4 w-5/6'>
        <GamesList games={filteredGames} />
      </div>
    </div>
  );
}
