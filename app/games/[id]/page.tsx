import { GamePageProps } from "./types";
import { getGame } from "@/repositories/games";
import { getExpansions } from "@/repositories/games";
import GamesList from "@/components/GameList/GamesList";

export default async function GamePage({ params }: { params: GamePageProps }) {
  const { id } = await params;
  const game = await getGame(id);

  if (!game) {
    return <div>Game not found</div>;
  }

  // Fetch expansions only if this is a base game
  const expansions =
    game.type === "BaseGame" ? await getExpansions(game.id) : [];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>{game.name}</h1>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Details</h2>
          <ul className='space-y-2'>
            <li>Publisher: {game.publisher}</li>
            <li>Release Year: {game.releaseYear}</li>
            <li>
              Players: {game.players.min} - {game.players.max}
            </li>
            {game.type === "Expansion" && (
              <li>
                Can be played standalone: {game.standalone ? "Yes" : "No"}
              </li>
            )}
          </ul>
        </div>
      </div>

      {game.type === "BaseGame" && expansions.length > 0 && (
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4'>Expansions</h2>
          <GamesList games={expansions} />
        </div>
      )}
    </div>
  );
}
