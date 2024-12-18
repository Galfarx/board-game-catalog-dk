"use client";
import { useState } from "react";
import Filter from "./Buttons/Filter/Filter";
import Button from "./Buttons/Regular/Button";
import { ButtonType } from "./Buttons/Regular/types";
import Modal from "./Modal/Modal";
import AddGame from "./Forms/AddGame";
import Link from "next/link";

export default function MainHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGame = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className='py-4 border border-gray-200 bg-white sticky top-0'>
        <div className='container mx-auto flex justify-between'>
          <Link href='/'>Board Game Catalog</Link>
          <Button
            type={ButtonType.Add}
            onClick={() => {
              console.log("Add Game button clicked");
              setIsModalOpen(true);
            }}
          >
            Add Game
          </Button>
          <Filter />
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className='text-2xl font-bold mb-4'>Add New Game</h2>
        <AddGame
          onSubmit={handleAddGame}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}
