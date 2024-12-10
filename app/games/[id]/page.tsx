import { getGame } from "@/repositories/games";

export default async function GamePage({ params }: { params: { id: string } }) {
  const game = await getGame(params.id);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>{game.name}</h1>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Details</h2>
          <ul className='space-y-2'>
            <li>Type: {game.type}</li>
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
    </div>
  );
}
