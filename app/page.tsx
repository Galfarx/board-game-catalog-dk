import SortableGameList from "@/components/GameList/SortableGameList";
import { getGames } from "@/repositories/games";

export default function Home() {
  const games = getGames();

  return <SortableGameList games={games} />;
}
