import Button from "../Buttons/Regular/Button";
import { ButtonType } from "../Buttons/Regular/types";
import ListElementEntry from "./ListElementEntry";
import { ListElementProps } from "./types";

export default function ListElement({
  name,
  releaseYear,
  players,
  publisher,
  expansions,
  standalone,
  type,
}: ListElementProps) {
  return (
    <div className='border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x'>
      <div className='flex flex-col w-4/5'>
        <div className='flex justify-between w-full mb-2'>
          <h3 className='font-semibold text-xl'>{name}</h3>
          <p className='text-sm italic text-gray-500'>
            {type === "Expansion" ? "Expansion" : "Base Game"}
          </p>
        </div>
        <ListElementEntry entry='Publisher' value={publisher} />
        <ListElementEntry
          entry='Publication year'
          value={releaseYear.toString()}
        />
        <ListElementEntry
          entry='Players'
          value={
            players.max
              ? `${players.min} - ${players.max}`
              : `${players.min} - ∞`
          }
        />
        {expansions ? (
          <ListElementEntry
            entry='Expansions'
            value={expansions.length.toString()}
          />
        ) : null}
        {standalone ? (
          <ListElementEntry entry='Can play standalone' value={"Yes"} />
        ) : null}
      </div>
      <div className='flex flex-col w-1/5 pl-4'>
        <Button type={ButtonType.Add}>Add expansion</Button>
        <Button type={ButtonType.Edit}>Edit</Button>
        <Button type={ButtonType.Delete}>Delete</Button>
      </div>
    </div>
  );
}
