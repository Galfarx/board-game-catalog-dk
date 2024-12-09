import { RangeProps } from "./types";

export default function Range({
  fromValue,
  toValue,
  onFromChange,
  onToChange,
}: RangeProps) {
  return (
    <div className='flex'>
      <input
        placeholder='from'
        className='w-full px-2 py-1 border border-black rounded-md'
        type='number'
        value={fromValue || ""}
        onChange={(e) =>
          onFromChange(e.target.value ? parseInt(e.target.value) : null)
        }
      />{" "}
      -{" "}
      <input
        placeholder='to'
        className='w-full px-2 py-1 border border-black rounded-md'
        type='number'
        value={toValue || ""}
        onChange={(e) =>
          onToChange(e.target.value ? parseInt(e.target.value) : null)
        }
      />
    </div>
  );
}
