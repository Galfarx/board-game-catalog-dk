import Button from "../Buttons/Regular/Button";
import { ButtonType } from "../Buttons/Regular/types";
import ListElementEntry from "./ListElementEntry";
export default function ListElement() {
  return (
    <div className='border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x'>
      <div className='flex flex-col w-4/5'>
        <div className='flex justify-between w-full mb-2'>
          <h3 className='font-semibold text-xl'>Game 1</h3>
          <p className='text-sm italic text-gray-500'>Base Game</p>
        </div>
        <ListElementEntry entry='Publisher' value='Portal' />
        <ListElementEntry entry='Publication year' value='2020' />
        <ListElementEntry entry='Players' value='2-4' />
        <ListElementEntry entry='Expansions' value='Catan' />
      </div>
      <div className='flex flex-col w-1/5 pl-4'>
        <Button type={ButtonType.Add}>Add expansion</Button>
        <Button type={ButtonType.Edit}>Edit</Button>
        <Button type={ButtonType.Delete}>Delete</Button>
      </div>
    </div>
  );
}
