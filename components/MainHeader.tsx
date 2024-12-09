import Filter from "./Buttons/Filter/Filter";
import Button from "./Buttons/Regular/Button";
import { ButtonType } from "./Buttons/Regular/types";

export default function MainHeader() {
  return (
    <header className='py-4 border border-gray-200 bg-white sticky top-0'>
      <div className='container mx-auto flex justify-between'>
        <h1>Board Game Catalog</h1>
        <Button type={ButtonType.Add}>Add Game</Button>
        <Filter />
      </div>
    </header>
  );
}
