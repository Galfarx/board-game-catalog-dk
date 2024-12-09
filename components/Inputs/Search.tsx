import { SearchProps } from "./types";

export default function Search({ value, onChange }: SearchProps) {
  return (
    <div className='flex'>
      <input
        className='px-2 py-1 border border-black rounded-md w-full'
        placeholder='Game Name'
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
