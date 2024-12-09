import { CheckboxProps } from "./types";

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className='flex items-center space-x-2 mb-2'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='form-checkbox h-5 w-5 text-blue-600'
      />
      <span>{label}</span>
    </label>
  );
}
