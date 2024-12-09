export default function Range() {
  return (
    <>
      <input
        placeholder='from'
        className='max-w-24 px-2 py-1 border border-black rounded-md'
        type='number'
      />{" "}
      -{" "}
      <input
        placeholder='to'
        className='max-w-24 px-2 py-1 border border-black rounded-md'
        type='number'
      />
    </>
  );
}
