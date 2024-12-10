import SortableGameList from "@/components/GameList/SortableGameList";
import { getGames } from "@/repositories/games";

export default async function Home() {
  const games = await getGames();
  return <SortableGameList games={games} />;
}
