import { ListElementEntryProps } from "./types";

export default function ListElementEntry({
  entry,
  value,
}: ListElementEntryProps) {
  return (
    <p className='text-gray-500'>
      {entry}: <span className='text-black'>{value}</span>
    </p>
  );
}
