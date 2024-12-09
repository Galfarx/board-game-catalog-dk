export default function Search() {
  return (
    <div className='flex'>
      <input
        className='px-2 py-1 border border-black rounded-l-md'
        placeholder='Game Name'
        type='text'
      ></input>
      <button className='px-2 py-1 border-y-black border-r-black border rounded-r-md bg-slate-200 cursor-pointer hover:bg-slate-300'>
        Search
      </button>
    </div>
  );
}
