import Checkbox from "../Inputs/Checkbox";
import Range from "../Inputs/Range";
import { FiltersProps } from "./types";

export default function Filters({
  publishers,
  selectedPublishers,
  onPublisherChange,
  selectedTypes,
  onTypeChange,
}: FiltersProps) {
  const handlePublisherChange = (publisher: string, checked: boolean) => {
    if (checked) {
      onPublisherChange([...selectedPublishers, publisher]);
    } else {
      onPublisherChange(selectedPublishers.filter((p) => p !== publisher));
    }
  };

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      onTypeChange([...selectedTypes, type]);
    } else {
      onTypeChange(selectedTypes.filter((t) => t !== type));
    }
  };

  return (
    <>
      <h2 className='font-bold text-lg my-4'>Filters</h2>
      <div className='flex flex-col mb-6'>
        <h3 className='font-semibold mb-2'>Type</h3>
        <Checkbox
          id='BaseGame'
          value='BaseGame'
          label='Base Game'
          checked={selectedTypes.includes("BaseGame")}
          onChange={(e) => handleTypeChange("BaseGame", e.target.checked)}
        />
        <Checkbox
          id='Expansion'
          value='Expansion'
          label='Expansion'
          checked={selectedTypes.includes("Expansion")}
          onChange={(e) => handleTypeChange("Expansion", e.target.checked)}
        />
      </div>
      <div className='flex flex-col mb-6'>
        <h3 className='font-semibold mb-2'>Publisher</h3>
        {publishers.map((publisher) => (
          <Checkbox
            key={publisher}
            id={publisher}
            value={publisher}
            label={publisher}
            checked={selectedPublishers.includes(publisher)}
            onChange={(e) => handlePublisherChange(publisher, e.target.checked)}
          />
        ))}
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
