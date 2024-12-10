"use client";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { AddGameProps } from "@/components/Forms/AddGame.types";
import Button from "@/components/Buttons/Regular/Button";
import { ButtonType } from "@/components/Buttons/Regular/types";
import Checkbox from "@/components/Inputs/Checkbox";
import Game from "@/repositories/gameModel";

export default function AddGame({ onSubmit, onCancel }: AddGameProps) {
  const [baseGames, setBaseGames] = useState<Game[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    releaseYear: "",
    publisher: "",
    type: "BaseGame",
    players: {
      min: "",
      max: "",
    },
    baseGame: "",
    standalone: false,
  });

  useEffect(() => {
    const fetchBaseGames = async () => {
      if (formData.type === "Expansion") {
        const gamesRef = collection(db, "games");
        const q = query(gamesRef, where("type", "==", "BaseGame"));
        const snapshot = await getDocs(q);
        const games = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Game)
        );
        setBaseGames(games);
      }
    };

    fetchBaseGames();
  }, [formData.type]);

  const handleTypeChange = (type: string) => {
    setFormData({
      ...formData,
      type,
      baseGame: type === "BaseGame" ? "" : formData.baseGame,
      standalone: type === "BaseGame" ? false : formData.standalone,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label className='block text-sm font-medium mb-1'>Game Name</label>
        <input
          type='text'
          className='w-full px-3 py-2 border rounded-md'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className='block text-sm font-medium mb-1'>Release Year</label>
        <input
          type='number'
          className='w-full px-3 py-2 border rounded-md'
          value={formData.releaseYear}
          onChange={(e) =>
            setFormData({ ...formData, releaseYear: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label className='block text-sm font-medium mb-1'>Publisher</label>
        <input
          type='text'
          className='w-full px-3 py-2 border rounded-md'
          value={formData.publisher}
          onChange={(e) =>
            setFormData({ ...formData, publisher: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label className='block text-sm font-medium mb-1'>Type</label>
        <select
          className='w-full px-3 py-2 border rounded-md'
          value={formData.type}
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option value='BaseGame'>Base Game</option>
          <option value='Expansion'>Expansion</option>
        </select>
      </div>

      {formData.type === "Expansion" && (
        <>
          <div>
            <label className='block text-sm font-medium mb-1'>Base Game</label>
            <select
              className='w-full px-3 py-2 border rounded-md'
              value={formData.baseGame}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  baseGame: e.target.value,
                })
              }
              required
            >
              <option value=''>Select base game</option>
              {baseGames.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Checkbox
              id='standalone'
              value='standalone'
              label='Can be played standalone'
              checked={formData.standalone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  standalone: e.target.checked,
                })
              }
            />
          </div>
        </>
      )}

      <div className='flex gap-4'>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1'>Min Players</label>
          <input
            type='number'
            className='w-full px-3 py-2 border rounded-md'
            value={formData.players.min}
            onChange={(e) =>
              setFormData({
                ...formData,
                players: { ...formData.players, min: e.target.value },
              })
            }
            required
          />
        </div>
        <div className='flex-1'>
          <label className='block text-sm font-medium mb-1'>Max Players</label>
          <input
            type='number'
            className='w-full px-3 py-2 border rounded-md'
            value={formData.players.max}
            onChange={(e) =>
              setFormData({
                ...formData,
                players: { ...formData.players, max: e.target.value },
              })
            }
            required
          />
        </div>
      </div>
      <div className='flex justify-end gap-2 mt-6'>
        <Button type={ButtonType.Delete} onClick={onCancel}>
          Cancel
        </Button>
        <Button type={ButtonType.Add}>Add Game</Button>
      </div>
    </form>
  );
}
