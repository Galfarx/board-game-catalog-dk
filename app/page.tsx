import Filters from "@/components/Filters";
import GamesList from "@/components/GameList/GamesList";

export default function Home() {
  return (
    <>
      <div className='container mx-auto flex divide-x h-screen gap-4'>
        <div className='w-1/6'>
          <Filters />
        </div>
        <div className='p-4 w-5/6'>
          <GamesList />
        </div>
      </div>
    </>
  );
}
