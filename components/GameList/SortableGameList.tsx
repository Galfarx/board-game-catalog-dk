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

  const publishers = [...new Set(games.map((game) => game.publisher))];

  const filteredGames = games.filter((game) => {
    const publisherMatch =
      selectedPublishers.length === 0 ||
      selectedPublishers.includes(game.publisher);
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(game.type);
    return publisherMatch && typeMatch;
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
        />
      </div>
      <div className='p-4 w-5/6'>
        <GamesList games={filteredGames} />
      </div>
    </div>
  );
}
