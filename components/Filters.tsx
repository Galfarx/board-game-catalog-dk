import Checkbox from "./Inputs/Checkbox";
import Range from "./Inputs/Range";

export default function Filters() {
  return (
    <>
      <h2 className='font-bold text-lg my-4'>Filters</h2>
      <div className='flex flex-col mb-6'>
        <h3 className='font-semibold mb-2'>Type</h3>
        <Checkbox id='basegame' value='BaseGame' label='Base Game' />
        <Checkbox id='expansion' value='Expansion' label='Expansion' />
      </div>
      <div className='flex flex-col mb-6'>
        <h3 className='font-semibold mb-2'>Publisher</h3>
        <Checkbox id='portal' value='portal' label='Portal' />
        <Checkbox id='rebel' value='rebel' label='Rebel' />
        <Checkbox id='lucky' value='lucky' label='Lucky' />
      </div>
      <div className='mb-6'>
        <h3 className='font-semibold mb-2'>Publication year</h3>
        <Range />
      </div>
      <div className='mb-6'>
        <h3 className='font-semibold mb-2'>Players</h3>
        <Range />
      </div>
    </>
  );
}
