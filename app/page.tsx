export default function Home() {
  return (
    <>
    <header className="py-4 border border-gray-200 bg-white sticky top-0">
        <div className="container mx-auto flex justify-between">
            <p>
                Board Game Catalog
            </p>
            <div className="flex">
                <input className="px-2 py-1 border border-black rounded-l-md" placeholder="Game Name" type="text"></input>
                <button className="px-2 py-1 border-y-black border-r-black border rounded-r-md bg-slate-200 cursor-pointer hover:bg-slate-300">Search</button>
            </div>
            <button className="px-2 py-1 text-white rounded-md bg-green-600 cursor-pointer hover:bg-green-700">Add game</button>
            <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </div>
        </div>
    </header>
    <div className="container mx-auto flex divide-x h-screen gap-4">
        <div className="w-1/6">
            <h2 className="font-bold text-lg my-4">Filters</h2>
            <div className="flex flex-col mb-6">
                <h3 className="font-semibold mb-2">Type</h3>
                <div className="mb-2">
                    <input type="checkbox" id="baseGame" name="baseGame" value="BaseGame"></input>
                    <label htmlFor="baseGame">Base Game</label>
                </div>
                <div className="mb-2">
                    <input type="checkbox" id="expansion" name="expansion" value="expansion"></input>
                    <label htmlFor="expansion">Expansion</label>
                </div>
            </div>
            <div className="flex flex-col mb-6">
                <h3 className="font-semibold mb-2">Publisher</h3>
                <div className="mb-2">
                    <input type="checkbox" id="portal" name="portal" value="portal"></input>
                    <label htmlFor="portal">Portal</label>
                </div>
                <div className="mb-2">
                    <input type="checkbox" id="rebel" name="rebel" value="rebel"></input>
                    <label htmlFor="rebel">Rebel</label>
                </div>
                <div className="mb-2">
                    <input type="checkbox" id="lucky" name="lucky" value="lucky"></input>
                    <label htmlFor="lucky">Lucky</label>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Publication year</h3>
                <input placeholder="from" className="max-w-24 px-2 py-1 border border-black rounded-md" type="number" /> - <input placeholder="to" className="max-w-24 px-2 py-1 border border-black rounded-md" type="number" />
            </div>
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Players</h3>
                <input placeholder="from" type="number" className="max-w-24 px-2 py-1 border border-black rounded-md" /> - <input placeholder="to" type="number" className="max-w-24 px-2 py-1 border border-black rounded-md" />
            </div>
        </div>
        <div className="p-4 w-5/6">
            <div className="flex flex-col w-full gap-4">
                <div className="border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x">
                    <div className="flex flex-col w-4/5">
                        <div className="flex justify-between w-full mb-2">
                            <h3 className="font-semibold text-xl">Game 1</h3>
                            <p className="text-sm italic text-gray-500">Base Game</p>
                        </div>
                        <p className="text-gray-500">Publisher: <span className="text-black">Portal</span></p>
                        <p className="text-gray-500">Publication year: <span className="text-black">2020</span></p>
                        <p className="text-gray-500">Players: <span className="text-black">2-4</span></p>
                        <p className="text-gray-500">Expansions: <span className="text-black">Catan</span></p>
                    </div>
                    <div className="flex flex-col w-1/5 pl-4">
                        <button className="px-2 py-1 text-white rounded-md bg-green-600 cursor-pointer hover:bg-green-700 mb-2">Add expansion</button>
                        <button className="px-2 py-1 text-white rounded-md bg-sky-600 cursor-pointer hover:bg-sky-700 mb-2">Edit</button>
                        <button className="px-2 py-1 text-white rounded-md bg-red-600 cursor-pointer hover:bg-red-700 mb-2">Delete</button>
                    </div>
                </div>
                <div className="border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x">
                    <div className="flex flex-col w-4/5">
                        <div className="flex justify-between w-full mb-2">
                            <h3 className="font-semibold text-xl">Game 1</h3>
                            <p className="text-sm italic text-gray-500">Base Game</p>
                        </div>
                        <p className="text-gray-500">Publisher: <span className="text-black">Portal</span></p>
                        <p className="text-gray-500">Publication year: <span className="text-black">2020</span></p>
                        <p className="text-gray-500">Players: <span className="text-black">2-4</span></p>
                        <p className="text-gray-500">Expansions: <span className="text-black">Catan</span></p>
                    </div>
                    <div className="flex flex-col w-1/5 pl-4">
                        <button className="px-2 py-1 text-white rounded-md bg-green-600 cursor-pointer hover:bg-green-700 mb-2">Add expansion</button>
                        <button className="px-2 py-1 text-white rounded-md bg-sky-600 cursor-pointer hover:bg-sky-700 mb-2">Edit</button>
                        <button className="px-2 py-1 text-white rounded-md bg-red-600 cursor-pointer hover:bg-red-700 mb-2">Delete</button>
                    </div>
                </div>
                <div className="border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x">
                    <div className="flex flex-col w-4/5">
                        <div className="flex justify-between w-full mb-2">
                            <h3 className="font-semibold text-xl">Game 1</h3>
                            <p className="text-sm italic text-gray-500">Base Game</p>
                        </div>
                        <p className="text-gray-500">Publisher: <span className="text-black">Portal</span></p>
                        <p className="text-gray-500">Publication year: <span className="text-black">2020</span></p>
                        <p className="text-gray-500">Players: <span className="text-black">2-4</span></p>
                        <p className="text-gray-500">Expansions: <span className="text-black">Catan</span></p>
                    </div>
                    <div className="flex flex-col w-1/5 pl-4">
                        <button className="px-2 py-1 text-white rounded-md bg-green-600 cursor-pointer hover:bg-green-700 mb-2">Add expansion</button>
                        <button className="px-2 py-1 text-white rounded-md bg-sky-600 cursor-pointer hover:bg-sky-700 mb-2">Edit</button>
                        <button className="px-2 py-1 text-white rounded-md bg-red-600 cursor-pointer hover:bg-red-700 mb-2">Delete</button>
                    </div>
                </div>
                <div className="border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x">
                    <div className="flex flex-col w-4/5">
                        <div className="flex justify-between w-full mb-2">
                            <h3 className="font-semibold text-xl">Game 1</h3>
                            <p className="text-sm italic text-gray-500">Base Game</p>
                        </div>
                        <p className="text-gray-500">Publisher: <span className="text-black">Portal</span></p>
                        <p className="text-gray-500">Publication year: <span className="text-black">2020</span></p>
                        <p className="text-gray-500">Players: <span className="text-black">2-4</span></p>
                        <p className="text-gray-500">Expansions: <span className="text-black">Catan</span></p>
                    </div>
                    <div className="flex flex-col w-1/5 pl-4">
                        <button className="px-2 py-1 text-white rounded-md bg-green-600 cursor-pointer hover:bg-green-700 mb-2">Add expansion</button>
                        <button className="px-2 py-1 text-white rounded-md bg-sky-600 cursor-pointer hover:bg-sky-700 mb-2">Edit</button>
                        <button className="px-2 py-1 text-white rounded-md bg-red-600 cursor-pointer hover:bg-red-700 mb-2">Delete</button>
                    </div>
                </div>
                <div className="border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x">
                    <div className="flex flex-col w-4/5">
                        <div className="flex justify-between w-full mb-2">
                            <h3 className="font-semibold text-xl">Game 1</h3>
                            <p className="text-sm italic text-gray-500">Base Game</p>
                        </div>
                        <p className="text-gray-500">Publisher: <span className="text-black">Portal</span></p>
                        <p className="text-gray-500">Publication year: <span className="text-black">2020</span></p>
                        <p className="text-gray-500">Players: <span className="text-black">2-4</span></p>
                        <p className="text-gray-500">Expansions: <span className="text-black">Catan</span></p>
                    </div>
                    <div className="flex flex-col w-1/5 pl-4">
                        <button className="px-2 py-1 text-white rounded-md bg-green-600 cursor-pointer hover:bg-green-700 mb-2">Add expansion</button>
                        <button className="px-2 py-1 text-white rounded-md bg-sky-600 cursor-pointer hover:bg-sky-700 mb-2">Edit</button>
                        <button className="px-2 py-1 text-white rounded-md bg-red-600 cursor-pointer hover:bg-red-700 mb-2">Delete</button>
                    </div>
                </div>
                <div className="border border-gray-200 p-4 w-full flex justify-between gap-4 divide-x">
                    <div className="flex flex-col w-4/5">
                        <div className="flex justify-between w-full mb-2">
                            <h3 className="font-semibold text-xl">Game 1</h3>
                            <p className="text-sm italic text-gray-500">Base Game</p>
                        </div>
                        <p className="text-gray-500">Publisher: <span className="text-black">Portal</span></p>
                        <p className="text-gray-500">Publication year: <span className="text-black">2020</span></p>
                        <p className="text-gray-500">Players: <span className="text-black">2-4</span></p>
                        <p className="text-gray-500">Expansions: <span className="text-black">Catan</span></p>
                    </div>
                    <div className="flex flex-col w-1/5 pl-4">
                        <button className="px-2 py-1 text-white rounded-md bg-green-600 cursor-pointer hover:bg-green-700 mb-2">Add expansion</button>
                        <button className="px-2 py-1 text-white rounded-md bg-sky-600 cursor-pointer hover:bg-sky-700 mb-2">Edit</button>
                        <button className="px-2 py-1 text-white rounded-md bg-red-600 cursor-pointer hover:bg-red-700 mb-2">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
