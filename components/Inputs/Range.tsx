import { RangeProps } from "./types";

export default function Range({
  fromValue,
  toValue,
  onFromChange,
  onToChange,
}: RangeProps) {
  return (
    <>
      <input
        placeholder='from'
        className='max-w-24 px-2 py-1 border border-black rounded-md'
        type='number'
        value={fromValue || ""}
        onChange={(e) =>
          onFromChange(e.target.value ? parseInt(e.target.value) : null)
        }
      />{" "}
      -{" "}
      <input
        placeholder='to'
        className='max-w-24 px-2 py-1 border border-black rounded-md'
        type='number'
        value={toValue || ""}
        onChange={(e) =>
          onToChange(e.target.value ? parseInt(e.target.value) : null)
        }
      />
    </>
  );
}
