"use client";
import { useRouter } from "next/navigation";
import Button from "../Buttons/Regular/Button";
import { ButtonType } from "../Buttons/Regular/types";
import ListElementEntry from "./ListElementEntry";
import { GameListProps } from "./types";
import Link from "next/link";
import { deleteGame } from "@/repositories/games";

export default function ListElement({
  id,
  name,
  releaseYear,
  players,
  publisher,
  expansions,
  standalone,
  type,
}: GameListProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteGame(id);
      router.refresh();
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <div className='border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x'>
      <div className='flex flex-col w-4/5'>
        <div className='flex justify-between w-full mb-2'>
          <Link href={`/games/${id}`} className='font-semibold text-xl'>
            {name}
          </Link>
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
        <Button type={ButtonType.Delete} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
